var canvas = document.getElementById("canvas");
var processing = new Processing(canvas, function (processing) {
    processing.size(window.innerWidth, window.innerHeight);
    processing.background(0xFFF);

    var mouseIsPressed = false;
    processing.mousePressed = function () {
        mouseIsPressed = true;
    };
    processing.mouseReleased = function () {
        mouseIsPressed = false;
    };

    var keyIsPressed = false;
    processing.keyPressed = function () {
        keyIsPressed = true;
    };
    processing.keyReleased = function () {
        keyIsPressed = false;
    };

    function getImage(s) {
        var url = "https://www.kasandbox.org/stylesheets/scratchpads-exec-package/images/" + s + ".png";
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }

    with (processing) {

        // INSERT YOUR KHAN ACADEMY PROGRAM HERE

        var xPos = [
            random(0, window.innerWidth),
            random(0, window.innerWidth),
            random(0, window.innerWidth),
            random(0, window.innerWidth),
            random(0, window.innerWidth),
            random(0, window.innerWidth),
            random(0, window.innerWidth),
            random(0, window.innerWidth),
            random(0, window.innerWidth),
            random(0, window.innerWidth),
            random(0, window.innerWidth)];


        var yPos = [
            random(0, window.innerHeight),
            random(0, window.innerHeight),
            random(0, window.innerHeight),
            random(0, window.innerHeight),
            random(0, window.innerHeight),
            random(0, window.innerHeight),
            random(0, window.innerHeight),
            random(0, window.innerHeight),
            random(0, window.innerHeight),
            random(0, window.innerHeight),
            random(0, window.innerHeight)];

        var minSpeed = 1;
        var maxSpeed = 4;
        var xSpeed = [
            random(minSpeed, maxSpeed),
            random(minSpeed, maxSpeed),
            random(minSpeed, maxSpeed),
            random(minSpeed, maxSpeed),
            random(minSpeed, maxSpeed),
            random(minSpeed, maxSpeed),
            random(minSpeed, maxSpeed),
            random(minSpeed, maxSpeed),
            random(minSpeed, maxSpeed),
            random(minSpeed, maxSpeed),
            random(minSpeed, maxSpeed)];

        var minL = 25, maxL = window.innerWidth / 5;
        var bodyL = [
            random(minL, maxL),
            random(minL, maxL),
            random(minL, maxL),
            random(minL, maxL),
            random(minL, maxL),
            random(minL, maxL),
            random(minL, maxL),
            random(minL, maxL),
            random(minL, maxL),
            random(minL, maxL),
            random(minL, maxL)];

        var minW = 25, maxW = window.innerWidth / 8;
        var bodyW = [
            random(minW, maxW),
            random(minW, maxW),
            random(minW, maxW),
            random(minW, maxW),
            random(minW, maxW),
            random(minW, maxW),
            random(minW, maxW),
            random(minW, maxW),
            random(minW, maxW),
            random(minW, maxW),
            random(minW, maxW)];

        var cColor = [
            color(random(0, 255), random(0, 255), random(0, 255)),
            color(random(0, 255), random(0, 255), random(0, 255)),
            color(random(0, 255), random(0, 255), random(0, 255)),
            color(random(0, 255), random(0, 255), random(0, 255)),
            color(random(0, 255), random(0, 255), random(0, 255)),
            color(random(0, 255), random(0, 255), random(0, 255)),
            color(random(0, 255), random(0, 255), random(0, 255)),
            color(random(0, 255), random(0, 255), random(0, 255)),
            color(random(0, 255), random(0, 255), random(0, 255)),
            color(random(0, 255), random(0, 255), random(0, 255)),
            color(random(0, 255), random(0, 255), random(0, 255))];

        var eyeSize = [
            random(5, 25),
            random(5, 25),
            random(5, 25),
            random(5, 25),
            random(5, 25),
            random(5, 25),
            random(5, 25),
            random(5, 25),
            random(5, 25),
            random(5, 25),
            random(5, 25)];

//var bDirection = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

        var minBubbleX = 0;
        var maxBubbleX = window.innerWidth;
        var bubbleX = [
            random(minBubbleX, maxBubbleX),
            random(minBubbleX, maxBubbleX),
            random(minBubbleX, maxBubbleX),
            random(minBubbleX, maxBubbleX),
            random(minBubbleX, maxBubbleX),
            random(minBubbleX, maxBubbleX),
            random(minBubbleX, maxBubbleX),
            random(minBubbleX, maxBubbleX),
            random(minBubbleX, maxBubbleX),
            random(minBubbleX, maxBubbleX),
            random(minBubbleX, maxBubbleX),
            random(minBubbleX, maxBubbleX)];

        var minBubbleY = 0;
        var maxBubbleY = window.innerHeight;
        var bubbleY = [
            random(minBubbleY, maxBubbleY),
            random(minBubbleY, maxBubbleY),
            random(minBubbleY, maxBubbleY),
            random(minBubbleY, maxBubbleY),
            random(minBubbleY, maxBubbleY),
            random(minBubbleY, maxBubbleY),
            random(minBubbleY, maxBubbleY),
            random(minBubbleY, maxBubbleY),
            random(minBubbleY, maxBubbleY),
            random(minBubbleY, maxBubbleY),
            random(minBubbleY, maxBubbleY),
            random(minBubbleY, maxBubbleY)];

        var minBubbleSize = 5, maxBubbleSize = 30;
        var bubbleSize = [
            random(minBubbleSize, maxBubbleSize),
            random(minBubbleSize, maxBubbleSize),
            random(minBubbleSize, maxBubbleSize),
            random(minBubbleSize, maxBubbleSize),
            random(minBubbleSize, maxBubbleSize),
            random(minBubbleSize, maxBubbleSize),
            random(minBubbleSize, maxBubbleSize),
            random(minBubbleSize, maxBubbleSize),
            random(minBubbleSize, maxBubbleSize),
            random(minBubbleSize, maxBubbleSize),
            random(minBubbleSize, maxBubbleSize),
            random(minBubbleSize, maxBubbleSize)];

        var minBubbleBackX = 0;
        var maxBubbleBackX = window.innerWidth;
        var bubbleBackX = [
            random(minBubbleBackX, maxBubbleBackX),
            random(minBubbleBackX, maxBubbleBackX),
            random(minBubbleBackX, maxBubbleBackX),
            random(minBubbleBackX, maxBubbleBackX),
            random(minBubbleBackX, maxBubbleBackX),
            random(minBubbleBackX, maxBubbleBackX),
            random(minBubbleBackX, maxBubbleBackX),
            random(minBubbleBackX, maxBubbleBackX),
            random(minBubbleBackX, maxBubbleBackX),
            random(minBubbleBackX, maxBubbleBackX),
            random(minBubbleBackX, maxBubbleBackX),
            random(minBubbleBackX, maxBubbleBackX)];

        var minBubbleBackY = 0;
        var maxBubbleBackY = window.innerHeight;
        var bubbleBackY = [
            random(minBubbleBackY, maxBubbleBackY),
            random(minBubbleBackY, maxBubbleBackY),
            random(minBubbleBackY, maxBubbleBackY),
            random(minBubbleBackY, maxBubbleBackY),
            random(minBubbleBackY, maxBubbleBackY),
            random(minBubbleBackY, maxBubbleBackY),
            random(minBubbleBackY, maxBubbleBackY),
            random(minBubbleBackY, maxBubbleBackY),
            random(minBubbleBackY, maxBubbleBackY),
            random(minBubbleBackY, maxBubbleBackY),
            random(minBubbleBackY, maxBubbleBackY),
            random(minBubbleBackY, maxBubbleBackY)];


        var minBubbleBackSize = 5;
        var maxBubbleBackSize = 60;
        var bubbleBackSize = [
            random(minBubbleBackSize, maxBubbleBackSize),
            random(minBubbleBackSize, maxBubbleBackSize),
            random(minBubbleBackSize, maxBubbleBackSize),
            random(minBubbleBackSize, maxBubbleBackSize),
            random(minBubbleBackSize, maxBubbleBackSize),
            random(minBubbleBackSize, maxBubbleBackSize),
            random(minBubbleBackSize, maxBubbleBackSize),
            random(minBubbleBackSize, maxBubbleBackSize),
            random(minBubbleBackSize, maxBubbleBackSize),
            random(minBubbleBackSize, maxBubbleBackSize),
            random(minBubbleBackSize, maxBubbleBackSize),
            random(minBubbleBackSize, maxBubbleBackSize)];


        var MyOnResize = function () {
            //window.alert("Hei!");
            processing.size(window.innerWidth, window.innerHeight);
            maxBubbleX = window.innerWidth;
            maxBubbleY = window.innerHeight;
            maxBubbleBackX = window.innerHeight;
            maxBubbleBackY = window.innerWidth;
            maxL = window.innerWidth / 5;
            maxW = window.innerWidth / 8;
        };

        window.addEventListener("resize", MyOnResize);

        var drawBubble = function (centerX, centerY, bubbleSize, IsFront) {
            if (IsFront > 0) {
                stroke(64, 64, 255);
                fill(70, 220, 255);
            }
            else {
                noStroke();
                fill(110, 190, 255);
            }
            ellipse(centerX, centerY, bubbleSize, bubbleSize);
        };

        var drawFish = function (centerX, centerY, bodyLength, bodyHeight, bodyColor, eyeSize) {
            noStroke();
            fill(bodyColor);
            // body
            ellipse(centerX, centerY, bodyLength, bodyHeight);
            // tail
            var tailWidth = bodyLength / 4;
            var tailHeight = bodyHeight / 2;
            triangle(centerX - bodyLength / 2, centerY,
                centerX - bodyLength / 2 - tailWidth, centerY - tailHeight,
                centerX - bodyLength / 2 - tailWidth, centerY + tailHeight);
            // eye
            fill(33, 33, 33);
            ellipse(centerX + bodyLength / 4, centerY, eyeSize, eyeSize);
        };

        var Drawbubbles = function (MyIsFront) {
            if (MyIsFront != 0) {
                for (var i = 0; i < bubbleX.length; i++) {
                    if (bubbleY[i] < 0 - bubbleSize [i] / 2) {  //create new bubble?
                        bubbleY[i] = random(minBubbleY, maxBubbleY);
                        bubbleX[i] = random(minBubbleX, maxBubbleX);
                        bubbleSize[i] = random(minBubbleSize, maxBubbleSize);
                        //playSound(getSound("rpg/water-bubble"));
                    }
                    else {
                        bubbleY[i]--;
                    }
                    drawBubble(bubbleX[i], bubbleY[i], bubbleSize[i], 1);
                }
            }
            else {
                for (var i = 0; i < bubbleBackX.length; i++) {
                    if (bubbleBackY[i] < 0 - bubbleBackSize[i] / 2) {  //create new bubble?
                        bubbleBackY[i] = random(minBubbleBackY, maxBubbleBackY);
                        bubbleBackX[i] = random(minBubbleBackX, maxBubbleBackX);
                        bubbleSize[i] = random(minBubbleSize, maxBubbleSize);
                        //playSound(getSound("rpg/water-bubble"));
                    }
                    else {
                        bubbleBackY[i]--;
                    }
                    drawBubble(bubbleBackX[i], bubbleBackY[i], bubbleBackSize[i], 0);
                }
            }
        };


        frameRate(24);

        var draw = function () {
            var i;
            background(89, 216, 255);
            Drawbubbles(0);
            for (i = 0; i < xPos.length; i++) {
                if (xPos[i] > window.innerWidth + bodyL[i]) {  // draw new fish?
                    yPos[i] = random(0, window.innerHeight);
                    if (random(0, 20) > 19) {					// create a big fish sometimes
                        bodyL[i] = window.innerWidth / 3;
                    }
                    else {
                        bodyL[i] = random(minL, maxL);
                    }
                    bodyW[i] = random(minW, maxW);
                    cColor[i] = color(random(0, 255), random(0, 255), random(0, 255));
                    xPos[i] = -bodyL[i] / 2;
                    xSpeed[i] = random(minSpeed, maxSpeed);
                    //playSound(getSound ("rpg/water-slosh"));
                }
                else {
                    var speedAdjust = random(1, 50);
                    if (speedAdjust > 49) {
                        xSpeed[i] = xSpeed[i] + xSpeed[i] / 2; //incease speed by 50%
                        if (xSpeed[i] > maxSpeed) {
                            xSpeed[i] = maxSpeed;
                        }
                    } else if (speedAdjust > 48) {
                        xSpeed[i] = xSpeed[i] - xSpeed[i] / 2; //decrease speed by 50%
                        if (xSpeed[i] < 1) {
                            xSpeed[i] = 1;
                        }
                    }
                    xPos [i] += xSpeed[i];
                }
                drawFish(xPos[i], yPos[i], bodyL[i], bodyW[i], cColor[i], eyeSize[i]);
            }
            Drawbubbles(1);
        };


// END OF KHAN ACADEMY CODE

    }
    if (typeof draw !== 'undefined') processing.draw = draw;
});