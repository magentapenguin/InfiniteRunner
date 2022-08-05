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
  console.log(size, moveSpeed, img);
  if (size === undefined){
    size = 30;
  }
  if (moveSpeed === undefined){
    moveSpeed = MOVESPEED;
  }
  if (img === undefined){
    img = 'shield';
  }
  console.log(size, moveSpeed, img);
  Phaser.Sprite.call(this, game, x, y, 'shield');
  game.add.existing(this);
  this.size = size;
  //this.img = img;
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
    player.powerup("shield");
  }
};
