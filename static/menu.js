var btnclicks =0;
var waspressed=false;
function menuPreload() {
    game.load.spritesheet('player', 'assets/players/chimp.png', 114, 114);
  for (var enemy in ENEMYSETTINGS) {
    game.load.spritesheet(enemy, ENEMYSETTINGS[enemy].path, 114, 114);
  }
  for (var powerup in POWERUPSETTINGS) {
    game.load.image(powerup, POWERUPSETTINGS[powerup].path, 114, 114);
  }
  game.load.image('bg', 'assets/backgrounds/background1.png');

  game.load.bitmapFont("font5", "assets/fonts/font5.png", "assets/fonts/font5.fnt");
  game.load.bitmapFont("font1", "assets/fonts/font1.png", "assets/fonts/font1.fnt");
  game.load.image("coin", "assets/pickups/coin1.png");
  game.load.image("explosion","assets/effects/laserRed01.png");

  game.load.image("uiwarning", "assets/ui/warning.png");
  game.load.image("uiapple", "assets/ui/apple.png");
  game.load.spritesheet("startbtn", "assets/ui/start.png", 246, 111)
  
  game.load.spritesheet("backbtn", "assets/ui/back.png", 67, 70);
  game.load.image("creditbtn", "assets/ui/credits.png");
  game.load.spritesheet("helpbtn", "assets/ui/help.png", 101, 111);

  game.load.audio("pickup", "assets/soundFx/coin10.mp3");
  game.load.audio("main", "assets/music/FranticLevel.mp3")
  game.load.audio("mainmenu", "assets/music/SubduedTheme.mp3")
  game.load.audio("explosionFx","assets/soundFx/fire.mp3");
  game.load.audio("oops","assets/soundFx/oops.mp3");
}

//Do all of your initial setup
function menuCreate() {
    game.scale.setUserScale((window.innerWidth)/960, (window.innerHeight-40)/640);
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    game.menuBackground = game.add.tileSprite(0, 0, 960, 640, "bg");
    game.state.add("menu", menuState);
    game.state.add("credits", credMenuState);
    game.state.add("shop", shopState);
    game.state.add("game", gameState);
    game.mainmusic=game.add.audio("mainmenu");
    game.mainmusic.play('',0,0.5, true);

    var menutxt = game.add.bitmapText(game.world.centerX, game.world.centerY/2, 'font5', "Infinte Runner", 40);
    menutxt.anchor.setTo(0.5, 0.5);

    game.musictxt = game.add.bitmapText(game.world.centerX, 10, 'font1', "(Tap or click the screen to start the music)", 20);
    game.musictxt.anchor.setTo(0.5, 0);
    game.musictxt.visible = game.device.needsTouchUnlock();

    var startbtn = game.add.button(game.world.centerX, game.world.centerY, "startbtn", () => { game.mainmusic.stop(); game.state.start("game"); }, this, 1, 0, 2, 0);
    startbtn.anchor.setTo(0.5, 0.5);
    var credbtn = game.add.button(game.world.centerX, game.world.centerY+startbtn.height-10, "creditbtn", () => { game.mainmusic.stop(); game.state.start("credits"); }, this);
    credbtn.anchor.setTo(0.5, 0.5);
    credbtn.scale.setTo(0.65,0.65);
    credbtn.x -= credbtn.width/4;
    var helpbtn = game.add.button(game.world.centerX, game.world.centerY+startbtn.height-10, "helpbtn", () => {}, this, 1, 0);
    helpbtn.anchor.setTo(1, 0.5);
    helpbtn.scale.setTo(0.65,0.65);
    helpbtn.x += startbtn.width/2;
}

//Write all of your continuous game logic here
function menuUpdate() {
    game.menuBackground.tilePosition.x -= 1;
    if(game.input.activePointer.isDown && !waspressed){
        game.musictxt.destroy();
        waspressed=true;
    }
}


const credits = `Phaser
Codakid - For the tutorial
Thanks to SketchyLogic and Juhani Junkala over at 
opengameart.org for the music! 
(From /assets/music/MusicCredits.txt)`

function credMenuPreload() {
  game.load.spritesheet('player', 'assets/players/chimp.png', 114, 114);
  for (var enemy in ENEMYSETTINGS) {
    game.load.spritesheet(enemy, ENEMYSETTINGS[enemy].path, 114, 114);
  }
  for (var powerup in POWERUPSETTINGS) {
    game.load.image(powerup, POWERUPSETTINGS[powerup].path, 114, 114);
  }
  game.load.bitmapFont("font5", "assets/fonts/font5.png", "assets/fonts/font5.fnt");
  game.load.bitmapFont("font1", "assets/fonts/font1.png", "assets/fonts/font1.fnt");
  game.load.image("coin", "assets/pickups/coin1.png");
  game.load.image("explosion","assets/effects/laserRed01.png");

  game.load.image("uiwarning", "assets/ui/warning.png");
  game.load.image("uiapple", "assets/ui/apple.png");
  game.load.spritesheet("startbtn", "assets/ui/start.png", 246, 111)

  game.load.audio("pickup", "assets/soundFx/coin10.mp3");
  game.load.audio("main", "assets/music/FranticLevel.mp3")
  game.load.audio("explosionFx","assets/soundFx/fire.mp3");
  game.load.audio("oops","assets/soundFx/oops.mp3");
game.load.image('bg', 'assets/backgrounds/background4.png');
game.load.spritesheet("backbtn", "assets/ui/back.png", 67, 70);
game.load.audio("mainmenu", "assets/music/Map.mp3");
}

//Do all of your initial setup
function credMenuCreate() {
  game.scale.setUserScale((window.innerWidth)/960, (window.innerHeight-40)/640);
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.menuBackground = game.add.tileSprite(0, 0, 960, 640, "bg");
  game.mainmusic=game.add.audio("mainmenu");
  game.mainmusic.play('',0,0.5, true);




  var menutxt = game.add.bitmapText(game.world.centerX, game.world.centerY/4, 'font5', "Infinte Runner Credits", 30);
  menutxt.anchor.setTo(0.5, 0.5);

  var backbtn = game.add.button(game.world.centerX/15, game.world.centerY/14, "backbtn", () => { game.mainmusic.stop(); game.state.start("menu"); }, this, 1, 0, 2, 0);
  var credtxt = [{y:game.world.centerY,height:0.1}]
  for (var line in credits.split("\n")) {
    let linetxt = game.add.bitmapText(game.world.centerX, (credtxt[credtxt.length - 1].y+(credtxt[credtxt.length - 1].height))+20, 'font1', credits.split("\n")[line], 20);
    linetxt.anchor.setTo(0.5, 0.5);
    credtxt.push(linetxt);
  }
}



//Write all of your continuous game logic here
function credMenuUpdate() {
  game.menuBackground.tilePosition.x -= 5;
}

