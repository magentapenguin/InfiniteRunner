//This first line creates our game object.
var game = new Phaser.Game(960, 640, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});
var gameElem = $(game.canvas);
var player;
var GAMEOVER = false;
game.coins = [];
game.enemies = [];
var mode = [1, false];

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

const ENEMYSETTINGS =
{bat:{name:"bat", path:"assets/enemies/bat.png", speed:[1,4]},
mine:{name:"mine", path:"assets/enemies/mine.png", speed:[0,0]},
ghost:{name:"ghost", path:"assets/enemies/ghost.png", speed:[-3,0]},
chomper:{name:"chomper", path:"assets/enemies/chomper.png", special:"zigzag", speed:[1,1]},
zombie:{name:"zombie", path:"assets/enemies/zombie.png", special:"chase", speed:[-3,-2]},
octopus:{name:"octopus", path:"assets/enemies/octopus.png", special:"speed", speed:[30, 30]}};
const POWERUPSETTINGS =
{shield:{name:"shield", path:"assets/pickups/powerup2.png", use:"shield"}};
const MOVESPEED = 6;
//var HUD = game.add.layer();
//HUD.depth = 10;

//Load all of your textures and sounds
function preload() {
  game.load.spritesheet('player', 'assets/players/robot_blue.png', 114, 114);
  for (var enemy in ENEMYSETTINGS) {
    game.load.spritesheet(enemy, ENEMYSETTINGS[enemy].path, 114, 114);
  }
  game.load.image('bg', 'assets/backgrounds/background1.png');

  game.load.bitmapFont("font5", "assets/fonts/font5.png", "assets/fonts/font5.fnt");
  game.load.bitmapFont("font1", "assets/fonts/font1.png", "assets/fonts/font1.fnt");
  game.load.image("coin", "assets/pickups/coin1.png");

  game.load.image("uiwarning", "assets/ui/warning.png");
}

//Do all of your initial setup
function create() {
  game.scale.setUserScale((window.innerWidth)/960, (window.innerHeight)/640);
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.background = game.add.tileSprite(0, 0, 960, 640, "bg");

  player = new Player();

  SEET();
  spawnEnemy();
  game.time.events.add(30000, spawnCoins, this);
  game.gameOverTEXT = game.add.bitmapText(game.world.centerX, game.world.centerY, 'font5', "GAME OVER ( You Failed )\nTap or click to restart");
  game.gameOverTEXT.anchor.setTo(0.5, 0.5);
  game.gameOverTEXT.visible = false;
  game.gameOverTEXT.z = -3;

  game.score = 0;
  game.failsTEXT = game.add.bitmapText(0, 0, 'font1', "Fails: "+fails, 30);
  game.failsTEXT.depth = -3;

  game.scoreTEXT = game.add.bitmapText(0, game.failsTEXT.height+10, 'font1', "Score: "+game.score, 30);
  game.scoreTEXT.depth = -3;

  game.highscoreTEXT = game.add.bitmapText(0, game.scoreTEXT.height+game.scoreTEXT.y+10, 'font1', "Highscore: "+highscore, 30);
  game.highscoreTEXT.depth = -3;

  //HUD.add([ game.scoreTEXT, game.failsTEXT, game.gameOverTEXT ]);

}

//Write all of your continuous game logic here
function update() {
  game.background.tilePosition.x -= MOVESPEED;
  if(game.input.activePointer.justPressed() && GAMEOVER){
    restart();
  }
  game.scoreTEXT.setText("Score: "+game.score);
}
