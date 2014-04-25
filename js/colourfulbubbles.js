var colours = ['orangered', 'gold', 'dodgerblue', 'indigo', 'red', 'lawngreen'];

/* Add ability to peek at random index to arrays. */
Array.prototype.random = function() {
    var index = Math.floor(Math.random() * this.length);
    return this[index];
};

$(document).ready(function() {

    $('#tiles-board').on('mouseenter', '.tile', function() {

        var $this = $(this);

        if($this.parents().length > 14) {
            $this.removeClass('tile');
            $this.addClass('old-tile');
            return;
        }

        $this.empty();
        $this.append('<div class="container"><div class="row"><div class="tile"></div><div class="tile"></div></div><div class="row"><div class="tile"></div><div class="tile"></div></div></div>');

        $this.removeClass('tile');
        $this.addClass('old-tile');

        $this.find('.tile').each(function() {
            $(this).css('background-color', colours.random())
        });

    });
});
