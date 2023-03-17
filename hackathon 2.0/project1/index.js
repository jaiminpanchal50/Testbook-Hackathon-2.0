console.log("Hello");


let btn = document.getElementById("btn");
let textBox = document.getElementById("textBox");
let list = document.getElementById("list");


 

    btn.addEventListener("click", () => {
        // console.log("clicked");
        let textBox = document.getElementById("textBox");
        // console.log(textBox.value);
        addToLis(textBox.value);
        textBox.value = " ";


    });


    function addToLis(item) {
        let createli = document.createElement("li");
        createli.innerHTML = `
                  <li>${item}<div class="CRUD">
                                <button id="btn1"> &check;</button>
                                <button id="btn3">EDIT</button>
                                <button id="btn2">&Cross;</button>
                                </div>
                                </li>
                                `;

        createli.querySelector("#btn1").addEventListener("click", () => {
            createli.style.textDecoration = "line-through"
        })
        createli.querySelector("#btn2").addEventListener("click", () => {
            createli.remove();
        })
        createli.querySelector("#btn3").addEventListener("click", () => {
            document.body.style.textDecoration = "overline"
        })
        list.appendChild(createli);
        return;
    }



