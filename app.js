var type = 'color';
var current = getColor();
var previous = [];

// Controls
function generateStatus() {
    storeCurrent();
    type == 'color' &&  getColor();
    type == 'gradient' &&  getGradient();
    $('#btn-back').removeClass('btn__secondary-disabled');
}
function changeStatus(newType) {
    if(type != newType) {
        switch (newType) {
            case 'color':
                getColor();
                $('#nav-color').addClass('nav--item__selected');
                $('#nav-gradient').removeClass('nav--item__selected');
                break;
        
            case 'gradient':
                getGradient();
                $('#nav-gradient').addClass('nav--item__selected');
                $('#nav-color').removeClass('nav--item__selected');
                break;
        }
    }
}

// GET
function getColor() {
    var color = randomColor();
    type = 'color';
    current = color;
    setStatus();
    return color;
}
function getGradient() {
    var gradient = randomGradient();
    type = 'gradient';
    current = gradient;
    setStatus();
    return gradient;
}

// SET
function setStatus() {
    $('.color--container').css("background", current);
}

// STORE
function storeCurrent() {
    previous.push(current);
}

// UNDO
function undoStatus() {
    if(previous[0]) {
        current = previous.pop();
        setStatus();
        previous[0] || $('#btn-back').addClass('btn__secondary-disabled');
    };
}

// Generate random color
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Generate random gradient
function randomGradient() {
    var color1 = randomColor();
    var color2 = randomColor();
    var direction = -45;
    var gradient = `linear-gradient(${direction}deg, ${color1}, ${color2})`;
    return gradient;
}