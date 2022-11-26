
//////////////////////
////// FUN FACT //////
// The Apple was orignaly going to be a revive powerup which could be used to revive at the gameover screen //
//////////////////////
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
  if (checkCollision(this, player) && player.visible) {
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
  if (checkCollision(this, player) && player.visible) {
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
    let s = new AutoScreenShake();
    function clear(toclear) {
      console.log("Clearing: ", toclear);
      explosion(toclear.x, toclear.y, 200, false);
      game.enemies.remove(toclear, true);
    }
    game.enemies.forEach(clear);
    SEET();
    
};