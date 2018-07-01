$(document).ready(function() {
     
    var winCount = 0;
    var lossCount = 0;
    var randomNum = Math.floor(Math.random() * 120) + 19;
    var num = Math.floor(Math.random() * 12) + 1;
    var total  = 0;

    var crystals = {
        one: 0,
        two: 1,
        three: 2,
        four: 3
    }

    
    $(".random").text(randomNum);

    function update() {
        // reset 

        total = 0;
        $(".score").text(total);

        crystals.one = num;
        crytals.two = num;
        crystals.three = num;
        crystals.four = num;
        randomNum = Math.floor(Math.random() * 120) + 19;
        $(".random").text(randomNum);

    }

    $(".diamond").on("click", function() {
        crystals.one++;
        total += crystals.one;
        $(".score").text(total);

        if (total === randomNum) {
            alert("You win!");
            winCount++;
            $(".win").text(winCount);
            
            update();

            
        }

        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);
         
            update();

        }


    });

    $(".diamond2").on("click", function() {

        crystals.two++;
        total += crystals.two;
        $(".score").text(total);

        if (total === randomNum) {
            alert("You win!");
            winCount++;
            $(".win").text(winCount);
            
            update();

        }

        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);
            
            update();
        }

    });

    $(".diamond3").on("click", function() {

        crystals.three++;
        total += crystals.three;
        $(".score").text(total);

        if (total === randomNum) {
            alert("You win!");
            winCount++;
            $(".win").text(winCount);

            update();
    
        }

        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);

            update();

        }

    });

    $(".diamond4").on("click", function() {

        crystals.four++;
        total += crystals.four;
        $(".score").text(total);

        if (total === randomNum) {
            alert("You win!");
            winCount++;
            $(".win").text(winCount);
            
            // reset
            update();

        }


        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);
            
            //reset
            update();
            
        }

    });

});