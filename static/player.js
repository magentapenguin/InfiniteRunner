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
  this.safe = 0;
  this.mag = 0;
  this.ySpeed = 0;
  this.maxSpeed = 5;
  this.accel = 0.5;
  if (this.maxSpeed <= GRAVITY){
    console.error("The player can not fight the force of gravity!")
  }
}



Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.update = function() {
  
  if (!game.input.activePointer.isDown) {
    this.ySpeed += GRAVITY;
    this.frame = 1;
  } else {
    this.ySpeed -= this.accel;
    this.frame = 0;
  }
  if (this.ySpeed > this.maxSpeed) {
    this.ySpeed = this.maxSpeed;
  } else if (this.ySpeed < this.maxSpeed *-1) {
    this.ySpeed = this.maxSpeed*-1;
  }
  this.y += this.ySpeed;
  if (this.y > game.height-(this.height+30)){
    this.y -= 3;
    this.ySpeed = 0;
  } else if (this.y < 3){
    this.y += 3;
    this.ySpeed = 0;
  }
};

Player.prototype.powerup = function(powerupimg, powerup) {
  if (!POWERUPSETTINGS[powerupimg].use === "revive") {
    game.pickupSfx.play("", 0, 0.5);
  }
  if (POWERUPSETTINGS[powerupimg].use === "shield") {
    this.tint = 0x88FFFF;
    this.safe++;
  } else if (POWERUPSETTINGS[powerupimg].use === "coinmag") {
    this.alpha = 0.7;
    this.mag++;
    game.time.events.add(20000, function () { player.powerdown("magnet"); }, this);
  } else if (POWERUPSETTINGS[powerupimg].use === "revive") {
    game.ApplePickupSfx.play("", 0, 0.5);
    findApple();
  } else if (POWERUPSETTINGS[powerupimg].use === "explosion") {
    powerup.explode();
  } else {
    console.warn(`Powerup type not defined: ${powerupimg}`);
  }
};
Player.prototype.powerdown = function(powerup) {
  if (POWERUPSETTINGS[powerup].use === "shield") {
    this.safe--;
    if (this.safe <= 0) {
      this.tint = 0xFFFFFF;
    }
  } else if (POWERUPSETTINGS[powerup].use === "coinmag") {
    this.mag--;
    if (this.mag <= 0) {
      this.alpha = 1;
    }
  }
};
