let min = 0;
let sec = 0;
let microsec = 0;

let timer = false;

document.getElementById("btn1").addEventListener("click", function (){
    timer = true;
    stopWatch();
})


document.getElementById("btn2").addEventListener("click", function (){
    timer = false;
})

    
document.getElementById("btn3").addEventListener("click", function (){
        timer = false;
        min=0;
        sec=0;
        microsec=0;
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        document.getElementById("microSec").innerHTML = "00";
    })



function stopWatch(){
    if (timer == true) {
        microsec = microsec  + 1;

        if (microsec == 100) {
            sec= sec+1;
            microsec = 00;
        }
        if (sec == 60) {
            min= min+1;
            sec = 00;
        }

         let minstr= min;
         let secstr= sec;
         let microsecstr= microsec;

         if (min < 10) {
            minstr = "0" + minstr;
         }
         if (sec < 10) {
            secstr = "0" + secstr;
         }
         if (microsec < 10) {
            secstr = "0" + secstr;
         }
         
        document.getElementById("min").innerHTML = minstr ;
        document.getElementById("sec").innerHTML = secstr ;
        document.getElementById("microSec").innerHTML = microsecstr;
        setTimeout("stopWatch()" ,10)
    }


}