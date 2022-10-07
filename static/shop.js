function shopPreload() {
    game.load.image('bg', 'assets/backgrounds/background4.png');
    game.load.spritesheet("backbtn", "assets/ui/back.png", 67, 70);
    game.load.audio("mainmenu", "assets/music/Venus.mp3");
}
  
  //Do all of your initial setup
  function shopCreate() {
    game.scale.setUserScale((window.innerWidth)/960, (window.innerHeight-40)/640);
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    game.menuBackground = game.add.tileSprite(0, 0, 960, 640, "bg");
    game.mainmusic=game.add.audio("mainmenu");
    game.mainmusic.play('',0,0.5, true);
  
  
  
  
    var menutxt = game.add.bitmapText(game.world.centerX, game.world.centerY/6, 'font5', "Shop", 30);
    menutxt.anchor.setTo(0.5, 0.5);
  
    var backbtn = game.add.button(game.world.centerX/15, game.world.centerY/14, "backbtn", () => { game.mainmusic.stop(); game.state.start("menu"); }, this, 1, 0, 2, 0);
    
  }
  
  
  
  //Write all of your continuous game logic here
  function shopUpdate() {
    game.menuBackground.tilePosition.x -= 1;
  }
  
  