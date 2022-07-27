function Shield(x, y, moveSpeed, img, size) {
  if (size === undefined){
    size = 40;
  }
  if (moveSpeed === undefined){
    moveSpeed = MOVESPEED;
  }
  if (img === undefined){
    img = "shield";
  }
  Phaser.Sprite.call(this, game, x, y, img);
  game.add.existing(this);
  this.size = size;
  this.moveSpeed = moveSpeed;
}


Powerup.prototype = Object.create(Phaser.Sprite.prototype);

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
