function Player(x, y, size) {
  if (x === undefined){
    x = 100;
  }
  if (y === undefined){
    y = 200;
  }
  if (size === undefined){
    size = 40;
  }
  Phaser.Sprite.call(this, game, x, y, 'player');
  game.add.existing(this);
  this.size = size;
  this.safe = false;
  this.mag = false;
}

Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.update = function() {
  if(game.input.activePointer.isDown){
    if (this.y > 3){
      this.y -= 3;
    }
    this.frame = 0;
  } else {
    if (this.y < game.height-(this.height+30)){
      this.y += 2;
    }
    this.frame = 1;
  }
};

Player.prototype.powerup = function(powerupimg, powerup) {
  
  if (POWERUPSETTINGS[powerupimg].use === "shield") {
    this.tint = 0x88FFFF;
    this.safe = true;
  } else if (POWERUPSETTINGS[powerupimg].use === "coinmag") {
    this.alpha = 0.7;
    this.mag = true;
    game.time.events.add(20000, function () { player.powerdown("magnet"); }, this);
  } else if (POWERUPSETTINGS[powerupimg].use === "revive") {
    findApple();
  } else if (POWERUPSETTINGS[powerupimg].use === "explosion") {
    powerup.explode();
  } else {
    console.warn(`Powerup type not defined: ${powerupimg}`);
  }
};
Player.prototype.powerdown = function(powerup) {
  if (POWERUPSETTINGS[powerup].use === "shield") {
    this.tint = 0xFFFFFF;
    this.safe = false;
  } else if (POWERUPSETTINGS[powerup].use === "coinmag") {
    this.alpha = 1;
    this.mag = false;
  }
};
