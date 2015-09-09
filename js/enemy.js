(function() {
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
    if(this.x > Options.xBorder + Options.xSize) {
      this.moveToStartOnX();
      this.changeSpeed();
      this.canGo = this.delay();
    } else {
      if(Date.now() > this.canGo) {
        this.x += this.speed;
        if(player.x < (this.x + Options.xSize - 20) && player.x > (this.x - 20) && player.y == this.y) {
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
    this.x = -Options.xSize;
  };

  // Moves the enemy to its starting position on the Y axis
  Enemy.prototype.moveToStartOnY = function(pos) {
    this.y = pos * Options.ySize;
  };

  // Make Enemy object accessible
  window.Enemy = Enemy;
})();
