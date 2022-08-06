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

Player.prototype.powerup = function(powerup) {
  if (POWERUPSETTINGS[powerup].use === "shield") {
    this.tint = 0x88FFFF;
    this.safe = true;
  }
};
Player.prototype.powerdown = function(powerup) {
  if (POWERUPSETTINGS[powerup].use === "shield") {
    this.tint = 0xFFFFFF;
    this.safe = false;
  }
};
