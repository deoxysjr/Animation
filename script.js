var canvas = document.getElementById("container");
var width0 = canvas.clientWidth;
var height0 = canvas.clientHeight;

console.log("width: " + width0);
console.log("height: " + height0);

var x1 = 15;
var y1 = 15;
var x2 = 65;
var y2 = 65;
var x3 = 115;
var y3 = 115;
var x4 = 165;
var y4 = 165;
var x5 = 215;
var y5 = 215;
var x6 = 265;
var y6 = 265;

(function makeMove() {
    var elem1 = document.getElementById("animate1");
    var elem2 = document.getElementById("animate2");
    var elem3 = document.getElementById("animate3");
    var elem4 = document.getElementById("animate4");
    var elem5 = document.getElementById("animate5");
    var elem6 = document.getElementById("animate6");

    elem1.style.top = x1 + 'px';
    elem1.style.left = y1 + 'px';

    elem2.style.top = x2 + 'px';
    elem2.style.left = y2 + 'px';

    elem3.style.top = x3 + 'px';
    elem3.style.left = y3 + 'px';

    elem4.style.top = x4 + 'px';
    elem4.style.left = y4 + 'px';

    elem5.style.top = x5 + 'px';
    elem5.style.left = y5 + 'px';

    elem6.style.top = x6 + 'px';
    elem6.style.left = y6 + 'px';
    
    setInterval(frame, 5);
    function frame() {

        //animate1
        var space1 = 15;
        if (y1 < height0 - (space1 + 50) && x1 == space1){
            y1++;
            elem1.style.top = y1 + 'px'; 
            elem1.style.left = x1 + 'px';
        } else if (y1 == height0 - (space1 + 50) && x1 < width0 - (space1 + 50)) {
            x1++;
            elem1.style.top = y1 + 'px'; 
            elem1.style.left = x1 + 'px';
        } else if (y1 != space1 && x1 == width0 - (space1 + 50)){
            y1--;
            elem1.style.top = y1 + 'px'; 
            elem1.style.left = x1 + 'px';
        } else if (y1 == space1 && x1 != space1) {
            x1--;
            elem1.style.top = y1 + 'px'; 
            elem1.style.left = x1 + 'px';
        }

        //animate2
        var space2 = space1 + 50;
        if (y2 == space2 && x2 < width0 - (space2 + 50)){
            x2++;
            elem2.style.top = y2 + 'px'; 
            elem2.style.left = x2 + 'px';
        } else if (y2 < height0 - (space2 + 50) && x2 == width0 - (space2 + 50)){
            y2++;
            elem2.style.top = y2 + 'px'; 
            elem2.style.left = x2 + 'px';
        } else if (y2 == height0 - (space2 + 50) && x2 != space2) {
            x2--;
            elem2.style.top = y2 + 'px'; 
            elem2.style.left = x2 + 'px';
        } else if (y2 != space2 && x2 == space2) {
            y2--;
            elem2.style.top = y2 + 'px'; 
            elem2.style.left = x2 + 'px';
        }

        //animate3
        var space3 = space2 + 50;
        if (y3 < height0 - (space3 + 50) && x3 == space3){
            y3++;
            elem3.style.top = y3 + 'px'; 
            elem3.style.left = x3 + 'px';
        } else if (y3 == height0 - (space3 + 50) && x3 < width0 - (space3 + 50)) {
            x3++;
            elem3.style.top = y3 + 'px'; 
            elem3.style.left = x3 + 'px';
        } else if (y3 != space3 && x3 == width0 - (space3 + 50)){
            y3--;
            elem3.style.top = y3 + 'px'; 
            elem3.style.left = x3 + 'px';
        } else if (y3 == space3 && x3 != space3) {
            x3--;
            elem3.style.top = y3 + 'px'; 
            elem3.style.left = x3 + 'px';
        }

        //animate4
        var space4 = space3 + 50;
        if (y4 == space4 && x4 < width0 - (space4 + 50)){
            x4++;
            elem4.style.top = y4 + 'px'; 
            elem4.style.left = x4 + 'px';
        } else if (y4 < height0 - (space4 + 50) && x4 == width0 - (space4 + 50)){
            y4++;
            elem4.style.top = y4 + 'px'; 
            elem4.style.left = x4 + 'px';
        } else if (y4 == height0 - (space4 + 50) && x4 != space4) {
            x4--;
            elem4.style.top = y4 + 'px'; 
            elem4.style.left = x4 + 'px';
        } else if (y4 != space4 && x4 == space4) {
            y4--;
            elem4.style.top = y4 + 'px'; 
            elem4.style.left = x4 + 'px';
        }

        //animate5
        var space5 = space4 + 50;
        if (y5 < height0 - (space5 + 50) && x5 == space5){
            y5++;
            elem5.style.top = y5 + 'px'; 
            elem5.style.left = x5 + 'px';
        } else if (y5 == height0 - (space5 + 50) && x5 < width0 - (space5 + 50)) {
            x5++;
            elem5.style.top = y5 + 'px'; 
            elem5.style.left = x5 + 'px';
        } else if (y5 != space5 && x5 == width0 - (space5 + 50)){
            y5--;
            elem5.style.top = y5 + 'px'; 
            elem5.style.left = x5 + 'px';
        } else if (y5 == space5 && x5 != space5) {
            x5--;
            elem5.style.top = y5 + 'px'; 
            elem5.style.left = x5 + 'px';
        }

        //animate6
        var space6 = space5 + 50;
        if (y6 == space6 && x6 < width0 - (space6 + 50)){
            x6++;
            elem6.style.top = y6 + 'px'; 
            elem6.style.left = x6 + 'px';
        } else if (y6< height0 - (space6 + 50) && x6 == width0 - (space6 + 50)){
            y6++;
            elem6.style.top = y6 + 'px'; 
            elem6.style.left = x6 + 'px';
        } else if (y6 == height0 - (space6 + 50) && x6 != space6) {
            x6--;
            elem6.style.top = y6 + 'px'; 
            elem6.style.left = x6 + 'px';
        } else if (y6 != space6 && x6 == space6) {
            y6--;
            elem6.style.top = y6 + 'px'; 
            elem6.style.left = x6 + 'px';
        }
    }
  })();