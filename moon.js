const SWIDTH = 31;
const SHEIGHT = 31;
const BORDER = 1;
const SPACER = 1;

function spritePosToImagePos(row, col) {
    return {
        x: (
            BORDER + col * (SPACER + SHEIGHT)
        ),
        y: (
            BORDER + row * (SPACER + SHEIGHT)
        )
    }
}

//console.log(`A sprite at position (0, 1) has pixel coordinates ${spritePosToImagePos(0, 1).x}, ${spritePosToImagePos(0, 1).y}`); //testing


// select the canvas and get
// its 2d context
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

//var spriteSheetSrc = 'moonphase.png';
// create a new image from the spritesheet
var image = new Image();
image.src = '/otherimages/moonphase.png';
//image.crossOrigin = true;

//extract frames
var newM = spritePosToImagePos(0,0); //new moon
var waxC = spritePosToImagePos(0,1); //waxing crescent
var firstQ = spritePosToImagePos(0,2); //first quarter
var waxG = spritePosToImagePos(0,3); //waxing gibbous
var fullM = spritePosToImagePos(1,0); //full moon
var wanG = spritePosToImagePos(1,1); //waning gibbous
var lastQ = spritePosToImagePos(1,2); //last quarter
var wanC = spritePosToImagePos(1,3); //waning crescent

var frame;
function animate() {
    switch(getMoonPhase()) {
        case 0:
            frame = newM;
            break;
        case 1:
            frame = waxC;
            break;
        case 2:
            frame = firstQ;
            break;
        case 3:
            frame = waxG;
            break;
        case 4:
            frame = fullM;
            break;
        case 5:
            frame = wanG;
            break;
        case 6:
            frame = lastQ;
            break;
        case 7:
            frame = wanC;
    }
    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
    context.drawImage(
        image,
        frame.x,
        frame.y,
        SWIDTH,
        SHEIGHT,
        0,
        0,
        SWIDTH,
        SHEIGHT
    );
}
function getPhaseNumber() {
    //full length of synodic month: 29.530588861
    const date = new Date();
    var daysFromEpoch = date.getTime() * 0.000000011574;
    var ageOfPhase = (daysFromEpoch - 6.751535545) % 29.530588861;
    return ageOfPhase;
}
function getMoonPhase() {
    //returns number 0..7 based on current moon phase
    //increment: 1.230441203 (synodic/24)
    age = getPhaseNumber();
    if (age <= 1.230441203 && age > 28.300147670) {
        return 0; //newM
    } else if (age <= 6.152206015) {
        return 1; //waxC
    } else if (age <= 8.613088421) {
        return 2; //firstQ
    } else if (age <= 13.534852230) {
        return 3; //waxG
    } else if (age <= 15.995735640) {
        return 4; //fullM
    } else if (age <= 20.917500450) {
        return 5; //wanG
    } else if (age <= 23.378382860) {
        return 6; //lastQ
    } else {
        return 7; //wanC
    }
}
function showPhase() {
    let phase = ""
    switch(getMoonPhase()) {
        case 0:
            phase = "new moon";
            break;
        case 1:
            phase = "waxing crescent";
            break;
        case 2:
            phase = "first quarter";
            break;
        case 3:
            phase = "waxing gibbous";
            break;
        case 4:
            phase = "full moon";
            break;
        case 5:
            phase = "waning gibbous";
            break;
        case 6:
            phase = "last quarter";
            break;
        case 7:
            phase = "waning crescent";
    }
    let percent = 0;
    if (getPhaseNumber() == 0) {
        percent = 0;
    }
    else if (getPhaseNumber() > 0 && getPhaseNumber < 14.7652944305) {
        percent = Math.round(getPhaseNumber() / 14.7652944305 * 100);
    }
    else if (getPhaseNumber() == 14.7652944305) {
        percent = 100;
    }
    else if (getPhaseNumber() > 14.7652944305) {
        percent = Math.round((29.530588861 - getPhaseNumber()) / 14.7652944305 * 100);
    }
    
    //percent = Math.round((((getPhaseNumber() + 14.7652944305) % 29.530588861) / 29.530588861) * 100);
    percent += "%"
    //document.getElementsByTagName("canvas")[0].title = phase + " (" + percent + ")";
    document.getElementsByTagName("canvas")[0].title = phase;
}
image.onload = function() {
    animate();
};