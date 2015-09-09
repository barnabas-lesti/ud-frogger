(function() {
  // All enemy objects
  window.allEnemies = [
    new Enemy(1),
    new Enemy(2),
    new Enemy(3)
  ];
    // Our player object
  window.player = new Player();

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
})();
