(function() {
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
          this.y -= Options.ySize;
        }
        break;
      case 'down':
        if(this.y < Options.yBorder) {
          this.y += Options.ySize;
        }
        break;
      case 'left':
        if(this.x > 0) {
          this.x -= Options.xSize;
        }
        break;
      case 'right':
        if(this.x < Options.xBorder) {
          this.x += Options.xSize;
        }
        break;
    }
  };

  // Moves our character back to its original position
  Player.prototype.moveToStart = function() {
    this.x = 2 * Options.xSize;
    this.y = 5 * Options.ySize;
  };

  // Make Player object accessible
  window.Player = Player;
})();
