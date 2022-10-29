/*function Shield(x, y) {
  console.log("does this even work?");
  //Run the sprite
  Phaser.Sprite.call(this, game, x, y, "shield");
  console.log("this is code");
  //Add shield to game
  game.add.existing(this);

  //Set the size
  this.size = 30;
  console.log("this has worked to line 11");
  //Set the anchor point
  this.anchor.setTo(0.5, 0.5);

}
Shield.prototype = Object.create(Phaser.Sprite.prototype);

Shield.prototype.update = function() {
console.log("this is functioning at line 19");
  //Move the shield
  this.x -= 4;

  //Collide with the player
  if(checkCollision(this, player))
  {
    console.log("i has collided with player");
    //Run the player's shield function
    player.powerup("shield");
    //Destroy this powerup
    this.destroy();
  }

};*/

function Shield(x, y, size , moveSpeed, img) {
  if (size === undefined){
    size = 30;
  }
  if (moveSpeed === undefined){
    moveSpeed = MOVESPEED;
  }
  if (img === undefined){
    img = 'shield';
  }
  Phaser.Sprite.call(this, game, x, y, img);
  game.powups.add(this);
  this.size = size;
  this.img = img;
  this.moveSpeed = moveSpeed;
}


Shield.prototype = Object.create(Phaser.Sprite.prototype);

Shield.prototype.update = function() {
  this.x -= this.moveSpeed;
  if (this.x < 0 - this.width - 3) {
    this.destroy();
  }
  if (checkCollision(this, player)) {
    this.destroy();
    player.powerup(this.img, this);
  }
};

function Apple(x, y, size , moveSpeed, img) {
  if (size === undefined){
    size = 30;
  }
  if (moveSpeed === undefined){
    moveSpeed = MOVESPEED;
  }
  if (img === undefined){
    img = 'apple';
  }
  Phaser.Sprite.call(this, game, x, y, img);
  game.powups.add(this);
  this.size = size;
  this.img = img;
  this.moveSpeed = moveSpeed;
}


Apple.prototype = Object.create(Phaser.Sprite.prototype);

Apple.prototype.update = function() {
  this.x -= this.moveSpeed;
  if (this.x < 0 - this.width - 3) {
    this.destroy();
  }
  if (checkCollision(this, player)) {
    this.destroy();
    player.powerup(this.img);
  }
};

function CoinMag(x, y, size , moveSpeed, img) {
  if (size === undefined){
    size = 30;
  }
  if (moveSpeed === undefined){
    moveSpeed = MOVESPEED;
  }
  if (img === undefined){
    img = 'magnet';
  }
  Phaser.Sprite.call(this, game, x, y, img);
  game.powups.add(this);
  this.size = size;
  this.img = img;
  this.moveSpeed = moveSpeed;
}


CoinMag.prototype = Object.create(Phaser.Sprite.prototype);

CoinMag.prototype.update = Shield.prototype.update;


function Explosion(x, y, size , moveSpeed, img) {
  if (size === undefined){
    size = 30;
  }
  if (moveSpeed === undefined){
    moveSpeed = MOVESPEED;
  }
  if (img === undefined){
    img = 'boom';
  }
  Phaser.Sprite.call(this, game, x, y, img);
  game.powups.add(this);
  this.size = size;
  this.img = img;
  this.moveSpeed = moveSpeed;
}


Explosion.prototype = Object.create(Phaser.Sprite.prototype);

Explosion.prototype.update = Shield.prototype.update;

Explosion.prototype.explode = function() {
    var s = new AutoScreenShake();
    function clear(toclear) {
      console.log("Clearing: ", toclear);
      explosion(toclear.x, toclear.y, 200, false);
      game.enemies.remove(toclear, true);
    }
    game.enemies.forEach(clear);
    SEET();
    
};