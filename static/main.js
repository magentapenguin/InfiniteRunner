const gameState = {preload: preload, create: create, update: update};
const menuState = {preload: menuPreload, create: menuCreate, update: menuUpdate};
const credMenuState = {preload: credMenuPreload, create: credMenuCreate, update: credMenuUpdate};
const shopState = {preload: shopPreload, create: shopCreate, update: shopUpdate};

//This first line creates our game object.
var game = new Phaser.Game(960, 640, Phaser.AUTO, 'game', menuState);
var gameElem = $(game.canvas);
var player;
var GAMEOVER = false;
//Setting one: Difficulty multiplier (2=normal)
//Setting two: Passed enemies increase move speed
game.mode = [10, false];

var fails = localStorage.getItem("fails");
if (fails == undefined) {
  fails = "0";
}
fails = parseInt(fails);
var highscore = localStorage.getItem("highscore");
if (highscore == undefined) {
  highscore = "0";
}
highscore = parseInt(highscore);
var apples = localStorage.getItem("apples");
if (apples == undefined) {
  apples = "0";
}
apples = parseInt(apples);

const ENEMYSETTINGS =
{bat:{name:"bat", path:"assets/enemies/bat.png", speed:[1,4]},
mine:{name:"mine", path:"assets/enemies/mine.png", speed:[0,0]},
ghost:{name:"ghost", path:"assets/enemies/ghost.png", speed:[-3,0]},
chomper:{name:"chomper", path:"assets/enemies/chomper.png", special:"zigzag", speed:[1,1]},
zombie:{name:"zombie", path:"assets/enemies/zombie.png", special:"chase", speed:[-3,-2]},
octopus:{name:"octopus", path:"assets/enemies/octopus.png", special:"speed", speed:[30, 30]}};
const POWERUPSETTINGS =
{shield:{name:"shield", path:"assets/pickups/powerup2.png", use:"shield", size:[58, 58]},
magnet:{name:"magnet", path:"assets/pickups/powerup1.png", use:"coinmag", size:[58, 58]},
boom:{name:"boom", path:"assets/pickups/powerup3.png", use:"explosion", size:[58, 58]},
apple:{name:"apple", path:"assets/pickups/powerup4.png", use:"revive", size:[58, 66]}};
var MOVESPEED = 6;
const GRAVITY = 0.5;

//Load all of your textures and sounds
function preload() {}

//Do all of your initial setup
function create() {
  game.scale.setUserScale((window.innerWidth)/960, (window.innerHeight-40)/640);
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.background = game.add.tileSprite(0, 0, 960, 640, "bg");
  var HUD = game.add.group();
  game.coins = game.add.group();
  game.enemies = game.add.group();
  game.powups = game.add.group();

  player = new Player();

  game.pickupSfx = game.add.audio("pickup");
  game.boomfx = game.add.audio("explosionFx");
  game.failfx = game.add.audio("oops");
  game.mainmusic=game.add.audio("main");
  game.mainmusic.play('',0,0.5, true);

  SEET();
  spawnEnemy();
  spawnPowerups();
  game.time.events.add(30000, spawnCoins, this);
  game.gameOverTEXT = game.add.bitmapText(game.world.centerX, game.world.centerY, 'font5', "GAME OVER ( You Failed )\nTap or click to restart");
  game.gameOverTEXT.anchor.setTo(0.5, 0.5);
  game.gameOverTEXT.visible = false;
  HUD.add(game.gameOverTEXT);

  uiapple = game.add.sprite(game.width-64, game.height-64, "uiapple");
  uiapple.anchor.setTo(1, 1);
  game.appleText = game.add.bitmapText((uiapple.x-uiapple.width/2) - 50, (uiapple.y-uiapple.height/2) +2, 'font1', "blank");
  game.appleText.anchor.setTo(1, 0.5);
  HUD.add(uiapple);
  HUD.add(appleText);
  game.appleText.visible = false;

  game.score = 0;
  game.failsTEXT = game.add.bitmapText(0, 0, 'font1', "Fails: "+fails, 30);
  HUD.add(game.failsTEXT);

  game.scoreTEXT = game.add.bitmapText(0, game.failsTEXT.height+10, 'font1', "Score: "+game.score, 30);
  HUD.add(game.scoreTEXT);

  game.highscoreTEXT = game.add.bitmapText(0, game.scoreTEXT.height+game.scoreTEXT.y+10, 'font1', "Highscore: "+highscore, 30);
  HUD.add(game.highscoreTEXT);

}

//Write all of your continuous game logic here
function update() {
  game.background.tilePosition.x -= MOVESPEED;
  if(game.input.activePointer.justPressed() && GAMEOVER){
    restart();
  }
  game.scoreTEXT.setText("Score: "+game.score);
  game.appleText.setText(apples+"x");
  effects.update();
}