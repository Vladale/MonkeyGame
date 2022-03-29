var totalBet;
var currentValue = 0;
var currentRound = 0;
function play() {
  document.getElementById("totalBet").disabled = true;
  var rand = Math.floor(Math.random() < 0.5 ? 0 : 1);
  totalbet = document.getElementById("totalBet").value;

  if (currentRound <= 5) {
    if (rand == 1) {
        currentRound++;
      if (currentRound == 1) {
        currentValue = totalbet * 1.2;
        document.getElementById("rand").innerHTML = rand;
        document.getElementById("cRound").innerHTML = currentRound;
        document.getElementById("round1").innerHTML = currentValue;
      //  currentRound++;
      } else {
        if (currentRound == 2) {
          currentValue = totalbet * 1.45;
          document.getElementById("rand").innerHTML = rand;
          document.getElementById("cRound").innerHTML = currentRound;
          document.getElementById("round2").innerHTML = currentValue;
       //   currentRound++;
        } else {
          if (currentRound == 3) {
            currentValue = totalbet * 1.75;
            document.getElementById("rand").innerHTML = rand;
            document.getElementById("cRound").innerHTML = currentRound;
            document.getElementById("round3").innerHTML = currentValue;
          //  currentRound++;
          } else {
            if (currentRound == 4) {
              currentValue = totalbet * 2.1;
              document.getElementById("rand").innerHTML = rand;
              document.getElementById("cRound").innerHTML = currentRound;
              document.getElementById("round4").innerHTML = currentValue;
           //   currentRound++;
            } else {
              if (currentRound == 5) {
                currentValue = totalbet * 2.5;
                document.getElementById("rand").innerHTML = rand;
                document.getElementById("cRound").innerHTML = currentRound;
                document.getElementById("round5").innerHTML = currentValue;
                document.getElementById("playGame").disabled = true;
                document.getElementById("maxValue").innerHTML=currentValue;

            //    currentRound++;
              }
            }
          }
        }
      }

      console.log(currentRound);
    } else {
        if(currentRound==0){
            document.getElementById("playGame").style.display = "none";
          //  document.getElementById("playGame").disabled = true;
            document.getElementById("playGameAgain").style.display = "block";
        }else{
      if (currentRound == 1) {
        currentValue = totalbet * 1.2;
        document.getElementById("rand").innerHTML = rand;
        document.getElementById("cRound").innerHTML = currentRound;
        document.getElementById("round1").innerHTML = '';
        currentRound--;
      } else{

        if (currentRound == 2) {
            currentValue = totalbet * 1.45;
            document.getElementById("rand").innerHTML = rand;
            document.getElementById("cRound").innerHTML = currentRound;
            document.getElementById("round2").innerHTML = '';
            currentRound--;
           
          } else{
            if (currentRound == 3) {
                currentValue = totalbet * 1.75;
                document.getElementById("rand").innerHTML = rand;
                document.getElementById("cRound").innerHTML = currentRound;
                document.getElementById("round3").innerHTML = '';
                currentRound--;
               
              } else{
                if (currentRound == 4) {
                    currentValue = totalbet * 2.1;
                    document.getElementById("rand").innerHTML = rand;
                    document.getElementById("cRound").innerHTML = currentRound;
                    document.getElementById("round4").innerHTML = '';
                    currentRound--;
                   
                  } else{
                    if (currentRound == 5) {
                        currentValue = totalbet * 2.5;
                        document.getElementById("rand").innerHTML = rand;
                        document.getElementById("cRound").innerHTML = currentRound;
                        document.getElementById("round5").innerHTML = '';
                        currentRound--;
                       
                      }
                  }
              }
          }
        }
      }
    }
  }
}
function playAgain() {
  var rand = Math.floor(Math.random() < 0.5 ? 0 : 1);
  if (rand == 1) {
    totalbet = document.getElementById("totalBet").value / 2;
    document.getElementById("totalBet").value = totalbet;
    document.getElementById("playGame").disabled = false;
    document.getElementById("playGameAgain").style.display = "none";
    document.getElementById("playGame").style.display = "block";
  } else {
    document.getElementById("totalBet").value = "Loss";
    document.getElementById("playGameAgain").disabled = true;
  }
}

function turnOff() {
  document.getElementById("playGame").disabled = true;
  document.getElementById("maxValue").innerHTML = Math.max(
    document.getElementById("round1").innerHTML,
    document.getElementById("round2").innerHTML,
    document.getElementById("round3").innerHTML,
    document.getElementById("round4").innerHTML,
    document.getElementById("round5").innerHTML
  );
}
