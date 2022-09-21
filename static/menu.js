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
    game.state.add("game", gameState);
    game.mainmusic=game.add.audio("mainmenu");
    game.mainmusic.play('',0,0.5, true);
}

//Write all of your continuous game logic here
function menuUpdate() {
    game.menuBackground.tilePosition.x -= 1;
    if(game.input.activePointer.isDown){
        game.state.start("game");
    }
}