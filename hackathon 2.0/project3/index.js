console.log("hello");

let btns = document.querySelectorAll(".drum");

for (let index = 0; index < btns.length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        let data = btns[index].innerHTML;
        console.log(data);

        let sound;
        if (data == "D") {
            let sound1 = new Audio('./sounds/tom-1.mp3')
            sound1.play()

        } else if (data == "R") {
            let sound2 = new Audio('./sounds/tom-2.mp3')
            sound2.play()

        } else if (data == "U") {
            let sound3 = new Audio('./sounds/tom-3.mp3')
            sound3.play()

        } else if (data == "M") {
            let sound4 = new Audio('./sounds/tom-4.mp3')
            sound4.play()

        } else if (data == "K") {
            let sound5 = new Audio('./sounds/snare.mp3')
            sound5.play()

        } else if (data == "I") {
            let sound6 = new Audio('./sounds/crash.mp3')
            sound6.play()

        } else
             sound = new Audio('./sounds/kick-bass.mp3')
              sound.play();
    });
}