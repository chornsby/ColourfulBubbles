var colours = ['orangered', 'gold', 'dodgerblue', 'indigo', 'red', 'lime'];

/* Add ability to peek at random index to arrays. */
Array.prototype.random = function() {
    var index = Math.floor(Math.random() * this.length);
    return this[index];
};

var bubbles = function($tile) {

    if($tile.parents().length > 14) {
        $tile.removeClass('tile');
        $tile.addClass('old-tile');
        $tile.css('background-color', 'white');
        return;
    }

    var newTiles = '<div class="container"><div class="row"><div class="tile"></div><div class="tile"></div></div><div class="row"><div class="tile"></div><div class="tile"></div></div></div>';

//    $tile.append(newTiles).fadeIn(300);
    var $newTiles = $(newTiles);

    $newTiles.find('.tile').each(function() {
        $(this).css('background-color', colours.random())
    });

    $newTiles.appendTo($tile);

    $tile.removeClass('tile');
    $tile.addClass('old-tile');


};

$(document).ready(function() {

    var $tilesBoard = $('#tiles-board');

    /* Give initial colours. */
    $('.tile').each(function() {
        $(this).css('background-color', colours.random());
    });

    $tilesBoard.on('mouseenter', '.tile', function() {
        bubbles($(this));
    });

    $tilesBoard.on('click', '.tile', function() {
        bubbles($(this));
    })
});
