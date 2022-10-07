// SEET: Spawn Extra Enemy Timer
function SEET() {
  spawnEnemy();
  game.time.events.add(game.rnd.between(40000/game.mode[0], 120000/game.mode[0]), SEET, this);
}

function spawnEnemy() {

  var enemies = [];
  for (var enemy in ENEMYSETTINGS) {
    enemies.push(enemy);
  }
  var img = game.rnd.pick(enemies);
  var speed = game.rnd.integerInRange(ENEMYSETTINGS[img].speed[0], ENEMYSETTINGS[img].speed[1]) + MOVESPEED;
  var newEnemy;
  if (ENEMYSETTINGS[img].special === "zigzag") {
    newEnemy = new ZigzagEnemy(game.width*2, game.world.centerY, speed);
  } else if (ENEMYSETTINGS[img].special === "chase") {
    newEnemy = new ChaseEnemy(game.width*2, game.world.centerY, speed);
  } else if (ENEMYSETTINGS[img].special === "speed") {
    newEnemy = new SpeedEnemy(game.width*3, game.world.centerY, speed);
    newEnemy.y = game.rnd.between(0, game.height-newEnemy.height);
    newEnemy.warning.y = newEnemy.y;
  } else {
    newEnemy = new Enemy(game.width*2, 0, speed, img);
    newEnemy.y = game.rnd.between(0, game.height-newEnemy.height);
  }


}

function checkCollision(object1, object2) {

  var obj1X = object1.x + object1.width/2;
  var obj1Y = object1.y + object1.height/2;
  var obj2X = object2.x + object2.width/2;
  var obj2Y = object2.y + object2.height/2;
  var distance = Phaser.Math.distance(obj1X, obj1Y, obj2X, obj2Y);
  if(distance < object1.size + object2.size)
  {
    return true;
  }
  else
    return false;
}

///   UPDATE VARIABLES   ///
function addFail() {
  fails += 1;
  if (game.mode[1]) {MOVESPEED -= 1;}
  localStorage.setItem("fails", fails);
  game.failsTEXT.setText("Fails: "+fails);
}

function findApple() {
  apples += 1;
  game.appleText.visible = true;
  game.time.events.add(10000, () => {game.appleText.visible = false;}, this);
  localStorage.setItem("apples", apples);
}

function eatApple(n) {
  apples -= n;
  localStorage.setItem("apples", apples);
}
////////////////////////////

///  GAMEOVER CODE  ///
function gameOver() {
  if (!GAMEOVER) {
    addFail();
    game.failfx.play();
    game.score = 0;
  }
  clearStuff();
  game.background.tint = 0xFF0000;
  player.destroy();
  game.gameOverTEXT.visible = true;
  GAMEOVER = true;
  if (game.score > highscore) {
    highscore = game.score;
    localStorage.setItem("highscore", highscore);
    game.highscoreTEXT.setText("High score: "+highscore);
  }
}
//////////////////////

function restart() {
  if (window.console)
  {
      console.log("Restarting...");
  }
  GAMEOVER = false;
  game.gameOverTEXT.visible = false;
  game.background.tint = 0xFFFFFF;
  player = new Player();
  //for (let i = 0; i < 3; i++) {
  //  spawnEnemy();
  //}
}

function clearStuff() {
  game.coins.removeAll(true);
  game.enemies.removeAll(true);
}

function spawnCoins(spacing) {
  game.rnd.pick(game.coinspawner.patterns)(game.width*1.2, spacing);
  game.time.events.add(3000, spawnCoins, this);
}
function spawnPowerups() {
  var powups = [];
  for (var powup in POWERUPSETTINGS) {
    powups.push(powup);
  }
  var img = game.rnd.pick(powups);
  var newPowerup;
  if (POWERUPSETTINGS[img].use === "shield") {
    newPowerup = new Shield(game.width*2, game.world.centerY);
  } else if (POWERUPSETTINGS[img].use === "coinmag") {
    newPowerup = new CoinMag(game.width*2, game.world.centerY);
  } else if (POWERUPSETTINGS[img].use === "revive" && (game.rnd.integerInRange(1,25) === 1)) {
    newPowerup = new Apple(game.width*2, game.world.centerY);
  } else if (POWERUPSETTINGS[img].use === "explosion" && (game.rnd.integerInRange(1,1) === 1)) {
    newPowerup = new Explosion(game.width*2, game.world.centerY);
  } else {
    game.time.events.add(20, spawnPowerups, this);
    if (POWERUPSETTINGS[img].use !== "revive") {console.warn(`Powerup type not defined: ${img}`);}
    return
  }
  newPowerup.y = game.rnd.between(0, game.height-newPowerup.height);
  game.time.events.add(game.rnd.between(5000*game.mode[0], 7500*game.mode[0]), spawnPowerups, this);
}

function explosion(x, y, size, shake, irregular, sound){
  let stuff = [];
  if(typeof size === 'undefined') {size = 40;}
  if(typeof shake === 'undefined') {shake = true;}
  if(typeof irregular === 'undefined') {irregular = true;}
  if(typeof sound === 'undefined') {sound = true;}
  if (shake) {stuff.push(new AutoScreenShake(20, size))};
  if (sound) {game.boomfx.play()};
  for (let i=0;i<size;i++) {
    stuff.push(new ExplosionParticle(x, y, "explosion", irregular))
  }
}


function clearAll() {
  game.coins.removeAll(true);
  game.enemies.removeAll(true);
  game.powups.removeAll(true);
}
