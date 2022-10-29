var SKINS =
{chimp:{name:"Basic Skin",id:"player", path:"/assets/players/chimp.png", bought:true, price:0}};


function shopPreload() {
  game.load.image('bg', 'assets/backgrounds/background3.png');
  game.load.image('fg', 'assets/backgrounds/shop.png');
  game.load.spritesheet("backbtn", "assets/ui/back.png", 67, 70);
  game.load.audio("mainmenu", "assets/music/8BitMetal.mp3");
}

//Do all of your initial setup
function shopCreate() {
  game.scale.setUserScale((window.innerWidth)/960, (window.innerHeight-40)/640);
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.menuBackground = game.add.tileSprite(0, 0, 960, 640, "bg");
  game.shopfg = game.add.sprite(0, 0, "fg");
  game.mainmusic=game.add.audio("mainmenu");
  game.mainmusic.play('',0,0.5, true);
  
  game.shopuiapple = game.add.sprite(game.width-64, game.height-32, "uiapple");
  game.shopuiapple.anchor.setTo(1, 1);
  game.shopAppleText = game.add.bitmapText((game.shopuiapple.x-game.shopuiapple.width/2) - 50, (game.shopuiapple.y-game.shopuiapple.height/2) +2, 'font1', "No Apples :(");
  game.shopAppleText.anchor.setTo(1, 0.5);
  if (game.apples > 0) {
    game.shopAppleText.setText(game.apples+"x");
  }
  
  var farmbot = new Skin(130, 140, "player", "Basic Skin")
  var menutxt = game.add.bitmapText(game.world.centerX, game.world.centerY/6, 'font5', "Apple Shop", 30);
  menutxt.anchor.setTo(0.5, 0.5);
  
  var backbtn = game.add.button(game.world.centerX/15, game.world.centerY/14, "backbtn", () => { game.mainmusic.stop(); game.state.start("game"); }, this, 1, 0, 2, 0);
   
}



//Write all of your continuous game logic here
function shopUpdate() {
  game.menuBackground.tilePosition.x -= 1;
}



function Skin(x,y,img, name, price) {
  Phaser.Sprite.call(this, game, x,y,img);
  game.add.existing(this);
  this.nametxt = game.add.bitmapText(this.x+this.width/1.2, this.y+this.height/2.1, "font6", name, 20);
  this.price = price
  this.purchased = false;
}

Skin.prototype = Object.create(Phaser.Sprite.prototype);

Skin.prototype.update = function() {
  if (!game.input.activePointer.isDown) {
    this.frame = 1;
  } else {
    this.frame = 0;
  }
};