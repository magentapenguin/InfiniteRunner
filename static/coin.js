function Coin(x, y, value, size) {
  if (value === undefined){
    value=1;
  }
  if (size === undefined){
    size = 40;
  }
  Phaser.Sprite.call(this, game, x, y, "coin");
  game.coins.add(this);
  this.size = size;
  this.basesize = size;
  this.scorevalue = value;
  this.moveSpeed = MOVESPEED;
}

Coin.prototype = Object.create(Phaser.Sprite.prototype);

Coin.prototype.update = function() {
  this.x -= this.moveSpeed;
  if (player.mag > 0) {
    this.size = this.basesize * 10;
  } else {
    this.size = this.basesize;
  }
  if (this.x < 0-this.width - 3) {
    this.destroy();
  }
  if (checkCollision(this, player) && !game.mode[1] && player.visible) {
    this.destroy();
    game.pickupSfx.play("", 0, 0.5);
    game.score += this.scorevalue;
  }
};


game.coinspawner = {}; //TODO: Choose a nickname for the coin spawner. "The Coin Spawn-a-tron" or "The Coin Spawner 3000"?
game.coinspawner.zigzag = function(x, spacing) {
  if (spacing === undefined ){
    spacing = 60;
  }
  if (x === undefined) {x=game.world.centerX-58/2;}
  let zigzag = [spacing, spacing*2, spacing, 0, -spacing, -spacing*2, -spacing, 0];
  zigzag.forEach(function(posY, posX) {
    posX = posX * spacing;
    posX += x;
    posY += game.world.centerY-58/2;
    var coin = new Coin(posX, posY);
  });
};
game.coinspawner.diamond = function(x, spacing) {
  if (spacing === undefined ){
    spacing = 60;
  }
  if (x === undefined) {x=game.world.centerX-58/2};
  let diamond = [spacing, spacing*2, spacing];
  var coin = new Coin(x-spacing, game.world.centerY-58/2);
  diamond.forEach(function(posY, posX) {
    posX = posX * spacing;
    posX += x;
    var coin = new Coin(posX, posY + game.world.centerY-58/2);
    var coin = new Coin(posX, game.world.centerY-58/2 - posY);
  });
  var coin = new Coin(x+(spacing*3), game.world.centerY-58/2);
};
game.coinspawner.isaac = function(x, spacing) {
  let i = [[[0, 3], [1, 3], [2, 3]],[[1, 2]],[[1, 1]],[[1, 0]],[[1, -1]],[[1, -2]],[[0, -3], [1, -3], [2, -3]]];
  let s = [[[0, 1], [1, 1], [2, 1]],[[0, 0]],[[0, -1], [1, -1], [2, -1]],[[2, -2]],[[0, -3], [1, -3], [2, -3]]];
  let a = [[[0, 1], [1, 1], [2, 1]],[[0, 0], [2, 0]],[[0, -1], [1, -1], [2, -1]],[[0, -2], [2, -2]],[[0, -3], [2, -3]]];
  let c = [[[0, 1], [1, 1], [2, 1]],[[0, 0]],[[0, -1]],[[0, -2]],[[0, -3], [1, -3], [2, -3]]];
  let isaac = [i,s,a,a,c];
  game.coinspawner.pattern(isaac, 50, 2, x);
};
game.coinspawner.smile = function(x, spacing) {
  let smile = [[[[1, -2], [2, -2], [3, -2]], [[0, -1], [4, -1]], [], [[1, 1], [3, 1]], [[1, 2], [3, 2]]]];
  game.coinspawner.pattern(smile, 50, 1, x);
}
game.coinspawner.heart = function (x, spacing) {
  let heart = [[[[2, -2]], [[1, -1], [2, -1], [3, -1]], [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]], [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]], [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]], [[1, 2], [3, 2]]]];
  game.coinspawner.pattern(heart, 50, 1);
}

game.coinspawner.pattern = function(pattern, spacing, value, x) {
  if (x === undefined) {x=game.world.centerX-58/2;}
  pattern.forEach(function(letter) {
    for (let line in letter) {
      for (let position in letter[line]) {
        let posX = letter[line][position][0];
        let posY = letter[line][position][1];
        posX = posX * spacing;
        posX += x;
        posY = posY * spacing;
        posY = (game.world.centerY-58/2) - posY;
        var coin = new Coin(posX, posY, value);
      }
    }
    x += 200;
  });
};

game.coinspawner.patterns = [game.coinspawner.zigzag, game.coinspawner.diamond, game.coinspawner.isaac];
game.coinspawner.weightedpatterns = [game.coinspawner.zigzag, game.coinspawner.zigzag, game.coinspawner.zigzag, game.coinspawner.diamond, game.coinspawner.diamond, game.coinspawner.diamond, game.coinspawner.diamond, game.coinspawner.isaac];
