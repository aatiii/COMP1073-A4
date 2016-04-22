"use strict";

// setup IIFE


(function () {


    var replaceBio = function() {
        // declare variable
        var bio;

        bio = document.getElementById("bio");
        bio.innerHTML = "I'm Hailun Li, an international student studying Web design and development. " +
        " This is my fourth year in Ontario, Canada. " +
        " I was previously studying Cognitive science and Computer science. I have some experience"+
        " with programming languages such as python, java, html, php, etc";
    }

    // execute the function
    replaceBio();

    // createjs section

    //reference to canvas element
    var canvas = document.getElementById('canvas');
    // canvas.setAttribute("position", screenWidth);
    $('#canvas').css('position', 'fixed');
    $('#canvas').css('bottom', '0');
    $('#canvas').css('left', '0');
    canvas.setAttribute("height", "250");
    canvas.setAttribute("width", "250");

    // create a stage container object
    var stage = new createjs.Stage(canvas);

    var text = null
    text.x = 30;
    text.y = 450;

    var image = null;
    image.x = 30;
    image.y = 450;

    function init() {
      
      createjs.Ticker.setFPS(80);
      createjs.Ticker.addEventListener("tick", animation)

      main();
    }

    function animation() {
      // move the object from side to side
      createjs.Tween.get(text, { loop: true })
        .to({x:130,y:450},2000,createjs.Ease.getPowIn(2.5));
        .to({x:30,y:450},2000,createjs.Ease.getPowIn(2.5));
      stage.update();

      createjs.Tween.get(image, { loop: true })
        .to({x:130,y:450},2000,createjs.Ease.getPowIn(2.5));
        .to({x:30,y:450},2000,createjs.Ease.getPowIn(2.5));
      stage.update();
    }

    function main() {
        text = new createjs.Text("Check Out My Project", "50px Tahoma", "#eee");
        stage.addChild(text);

        image = new createjs.Bitmap('../Content/p1.jpg');
        stage.addChild(image);
        // redirect user to project page
        image.on("click", function() {
          window.location.href = "../project.html"
        })
    }

    window.onload = init;
})();
