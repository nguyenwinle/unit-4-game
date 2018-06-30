$(document).ready(function() {
     
    var winCount = 0;
    var lossCount = 0;
    var randomNum = Math.floor(Math.random() * 100);
    var total  = 0;
    var crystals = {
        one: 0,
        two: 1,
        three: 2,
        four: 3
    }
    
    $(".random").text(randomNum);

    $(".diamond").on("click", function() {

        crystals.one++;
        total += crystals.one;
        $(".score").text(total);

        if (total === randomNum) {
            alert("You win!");
            winCount++;
            $(".win").text(winCount);
        }

        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);
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
        }

        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);
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
    
        }

        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);

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
        }


        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);
            
        }
    });

});