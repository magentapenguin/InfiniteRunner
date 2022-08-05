function Enemy(x, y, moveSpeed, img, size, animSpeed) {
  if (animSpeed === undefined){
    animSpeed = 3;
  }
  if (size === undefined){
    size = 40;
  }
  if (moveSpeed === undefined){
    moveSpeed = MOVESPEED;
  }
  if (img === undefined){
    img = "mine";
  }
  Phaser.Sprite.call(this, game, x, y, img);
  game.add.existing(this);
  this.size = size;
  this.animations.add("change");
  this.animations.play("change", animSpeed, true);
  this.moveSpeed = moveSpeed;
  game.enemies.push(this);

}

Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.update = function() {
  this.x -= this.moveSpeed;
  if (this.x < 0-this.width - 3) {
    this.destroy();
    game.enemies.splice(game.enemies.indexOf(this), 1);
    spawnEnemy();
    if (false) {
      MOVESPEED++;
      game.score++;
    }
  }
  if (checkCollision(this, player)) {
    gameOver();
  }
};





function ZigzagEnemy(x, y, moveSpeed, size, animSpeed) {
  if (animSpeed === undefined){
    animSpeed = 1;
  }
  Enemy.call(this, x, y, moveSpeed, "chomper", size, animSpeed);
}

ZigzagEnemy.prototype = Object.create(Enemy.prototype);

ZigzagEnemy.prototype.update = function() {
  Enemy.prototype.update.call(this);
  this.y = (Math.sin(this.x * 0.007) * ((game.height / 2) - 30)) + ((game.world.centerY/2)+(this.height/2));
};




function ChaseEnemy(x, y, moveSpeed, size, animSpeed) {
  Enemy.call(this, x, y, moveSpeed, "zombie", size, animSpeed);
  this.ySpeed = 0;
  this.maxSpeed = 1;
  this.accel = 0.5;
}

ChaseEnemy.prototype = Object.create(Enemy.prototype);

ChaseEnemy.prototype.update = function() {
  Enemy.prototype.update.call(this);
  if (this.y < player.y) {
    this.ySpeed += this.accel;
  } else if (this.y > player.y) {
    this.ySpeed -= this.accel;
  }
  if (this.ySpeed > this.maxSpeed) {
    this.ySpeed = this.maxSpeed;
  }
  this.y += this.ySpeed;
};





function SpeedEnemy(x, y, moveSpeed, size, animSpeed) {
  Enemy.call(this, x, y, moveSpeed, "octopus", size, animSpeed);
  this.warning = game.add.sprite(game.width - 200, y, "uiwarning");
  this.warning.flashon = true;
  this.warning.flash = function() {
    this.visible = !this.visible;
    if (this.flashon) {
      game.time.events.add(250, this.flash, this);
    }
    let temp = 0xFFFFFF;
    if (this.visible && this.flashon) {
      temp = 0xFF8F00;
    }
    game.background.tint = temp;
  };
  this.warning.flash();
}

SpeedEnemy.prototype = Object.create(Enemy.prototype);

SpeedEnemy.prototype.update = function() {
  Enemy.prototype.update.call(this);
  if (this.x < game.width+this.width) {
    this.warning.destroy();
    this.warning.flashon = false;
  }
};
