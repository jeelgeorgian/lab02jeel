var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

for (var i = 0; i < sliders.length; i++) {
    sliders[i].onchange = function () {
        var whichSlider = this.getAttribute("id");
        var sliderValue = this.value;
        var newRgb = changeRgb(whichSlider, sliderValue);
        var newCSS = writeCSS(newRgb);
        pageBg.style.backgroundColor = newCSS;
    };
}

function changeRgb(channel, value) {
    switch (channel) {
        case "red":
            rgb[0] = value;
            break;
        case "green":
            rgb[1] = value;
            break;
        case "blue":
            rgb[2] = value;
            break;
    }
    return rgb;
}

function writeCSS(newRgb) {
    var newColor = 'rgb(';
    var i = 0;
    while (i < newRgb.length) {
        newColor += newRgb[i];
        if (i < newRgb.length - 1) {
            newColor += ', ';
        }
        i++;
    }
    newColor += ')';
    return newColor;
}
