var SKINS =
{chimp:{name:"Basic Skin", id:"player", path:"/assets/players/chimp.png", purchased:false, price:0, show:true},
dev:{name:"Dev Skin", id:"devskin", path:"/assets/players/robot_dev.png", purchased:true, price:-1, show:false}};



let skins = localStorage.getItem("skins");
if (skins == undefined) {
  skins = "chimp";
}
skins = skins.split(",");
console.log(skins)
skins.forEach((element) => {
  let s = SKINS[element]
  console.log(s,element);
  if (s != undefined){
    SKINS[element].purchased = true;
  }
});

function onload() {
  game.SKINS = SKINS;
  game.selectedSkin = "chimp";
  game.isFromMenu = false;
}

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
  
  game.Skins = game.add.group();
  
  game.shopuiapple = game.add.sprite(game.width-64, game.height-32, "uiapple");
  game.shopuiapple.anchor.setTo(1, 1);
  game.shopAppleText = game.add.bitmapText((game.shopuiapple.x-game.shopuiapple.width/2) - 50, (game.shopuiapple.y-game.shopuiapple.height/2) +2, 'font1', "No Apples :(");
  game.shopAppleText.anchor.setTo(1, 0.5);
  if (game.apples > 0) {
    game.shopAppleText.setText(game.apples+"x");
  }
  
  var basic = new Skin(130, 140, "chimp");
  var robot_dev = new Skin(130, 240, "dev");
  var menutxt = game.add.bitmapText(game.world.centerX, game.world.centerY/6, 'font5', "Apple Shop", 30);
  menutxt.anchor.setTo(0.5, 0.5);
  
  var backbtn = game.add.button(game.world.centerX/15, game.world.centerY/14, "backbtn", () => { game.mainmusic.stop(); game.state.start(!game.isFromMenu?"game":"menu"); game.isFromMenu = false; }, this, 1, 0, 2, 0);
   
}



//Write all of your continuous game logic here
function shopUpdate() {
  game.menuBackground.tilePosition.x -= 1;
}



function Skin(x, y, id) {
  this.skindata = game.SKINS[id];
  this.skinid = id;
  if (this.skindata == undefined || this.skindata.length < 1) {
    console.error("Invalid ID: "+id);
    this.err = game.add.bitmapText(x,y, "font5", "ERROR", 25);
    this.err.tint = 0xFF0000
    this.errh = game.add.bitmapText(x,y+this.err.height+5, "font1", "Check the dev console.", 10);
    this.errh.tint = 0xFF0000
    return
  }
  this.price = this.skindata.price;
  Phaser.Sprite.call(this, game, x, y, this.skindata.id);
  game.Skins.add(this);
  this.frame = 1;
  if (this.price<=0) {
    this.price = "FREE";
  } else {
    this.price = `Cost: ${this.price} apples`
  }
  console.log(this);
  this.nametxt = game.add.bitmapText(this.x+this.width, this.y+this.height/4, "font6", this.skindata.name, 30);
  this.seltxt = game.add.bitmapText(this.x+this.width, this.nametxt.y, "font1", "Selected", 20);
  this.seltxt.y -= this.seltxt.height+5;
  this.seltxt.tint = 0x00D8FF;
  updatePricedata.call(this);
  updateSelSkins();
  

  this.inputEnabled = true;
  this.events.onInputDown.add(this.onClick, this);
  this.events.onInputOver.add(this.pointerOver, this);
  this.events.onInputOut.add(this.pointerOut, this);
}

Skin.prototype = Object.create(Phaser.Sprite.prototype);

Skin.prototype.onClick = function() {
  if (this.skindata.purchased) {
    game.selectedSkin = this.skinid;
    updateSelSkins();
  } else {
    if (game.apples>=this.skindata.price) {
      game.apples -= this.skindata.price;
      game.SKINS[this.skinid].purchased = true;
      this.skindata.purchased = true;
      game.selectedSkin = this.skinid;
      updateSkins();
      updateSelSkins();
      updatePricedata.call(this);
    }
  }
};

Skin.prototype.pointerOver = function() {
  this.frame = 0;
}

Skin.prototype.pointerOut = function() {
  this.frame = 1;
}

Skin.prototype.updateSel = function(isSel) {
  this.seltxt.visible = isSel;
}

function updateSelSkins() {
  game.Skins.forEach((skin) => {skin.updateSel(skin.skinid == game.selectedSkin)})
}

function updatePricedata() {
  this.visible = true;
  this.nametxt.visible = true;
  
  this.lockicon = game.add.sprite(this.x + this.width / 2, this.y + this.height / 2, "uilock");
  this.lockicon.visible = !this.skindata.purchased
  this.pricetxt = game.add.bitmapText(this.x + this.width, this.nametxt.y + this.nametxt.height + 10, "font6", "PURCHASED", 25);
  if (!this.skindata.purchased) {
    this.pricetxt.setText(this.price);
    this.tint = 0x000000;
    if (!this.skindata.show) {
      this.visible = false;
      this.pricetxt.visible = false;
      this.nametxt.visible = false;
      this.lockicon.visible = false;
    }
  } else if (!this.skindata.show) {
    this.secrettxt = game.add.bitmapText(this.pricetxt.x, this.pricetxt.y + this.pricetxt.height + 10, "font1", "[Secret Skin]", 20);
    this.secrettxt.tint = 0xFFD800;
  }
}
