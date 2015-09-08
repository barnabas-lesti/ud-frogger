// Basic configuration for the game
window.gameOptions = {
  xSize: 101,
  ySize: 83,
  xBorder: 404,
  yBorder: 415
};

// Enemies our player must avoid
var Enemy = function(pos) {
  this.moveToStartOnX();
  this.moveToStartOnY(pos);
  this.changeSpeed();
  this.canGo = this.delay();
  this.sprite = 'images/enemy-bug.png';
};

/* Update the enemy's position, required method for game
 * Parameter: dt, a time delta between ticks
 */
Enemy.prototype.update = function(dt) {
  if(this.x > gameOptions.xBorder + gameOptions.xSize) {
    this.moveToStartOnX();
    this.changeSpeed();
    this.canGo = this.delay();
  } else {
    if(Date.now() > this.canGo) {
      this.x += this.speed;
      if(player.x < (this.x + gameOptions.xSize - 20) && player.x > (this.x - 20) && player.y == this.y) {
        player.moveToStart();
      }
    }
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Calculates time to delay the enemy at start and when position is reset
Enemy.prototype.delay = function() {
  return Date.now() + Math.floor((Math.random() * 1000) + 1);
};

// Changes the enemy speed randomly
Enemy.prototype.changeSpeed = function() {
  this.speed = Math.floor((Math.random() * 8) + 4);
};

// Moves the enemy to its starting position on the X axis
Enemy.prototype.moveToStartOnX = function() {
  this.x = -gameOptions.xSize;
};

// Moves the enemy to its starting position on the Y axis
Enemy.prototype.moveToStartOnY = function(pos) {
  this.y = pos * gameOptions.ySize;
};

// Player class that we controll
var Player = function() {
  this.moveToStart();
  this.sprite = 'images/char-princess-girl.png';
};

/* Update the enemy's position, required method for game
 * Parameter: dt, a time delta between ticks
 */
Player.prototype.update = function(dt) {

};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handles our input and navigates our character accordingly
Player.prototype.handleInput = function(input) {
  switch (input) {
    case 'up':
      if(this.y > 0) {
        this.y -= gameOptions.ySize;
      }
      break;
    case 'down':
      if(this.y < gameOptions.yBorder) {
        this.y += gameOptions.ySize;
      }
      break;
    case 'left':
      if(this.x > 0) {
        this.x -= gameOptions.xSize;
      }
      break;
    case 'right':
      if(this.x < gameOptions.xBorder) {
        this.x += gameOptions.xSize;
      }
      break;
  }
};

// Moves our character back to its original position
Player.prototype.moveToStart = function() {
  this.x = 2 * gameOptions.xSize;
  this.y = 5 * gameOptions.ySize;
};

// All enemy objects
// Our player object
var allEnemies = [
  new Enemy(1),
  new Enemy(2),
  new Enemy(3)
];
var player = new Player();

/* This listens for key presses and sends the keys to your
 * Player.handleInput() method. You don't need to modify this.
 */
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
