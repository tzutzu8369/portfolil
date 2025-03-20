let cardArray = [];
let cardPage = [];
let front = document.getElementsByClassName("front");
let cards = document.getElementsByClassName("card");
let aside = document.getElementsByTagName("aside")[0];
let start = document.getElementById("start");
//生成元素
let button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick","window.location.reload()");
button.textContent = "再抽一次";
button.style.position = "fixed";
button.style.right = "1em";
button.style.bottom = "5em";
button.style.padding = "0.5em 1em";
button.style.fontSize = "20px";
button.style.backgroundColor = "#0003";
button.style.color = "#FFF";


// 開始玩
start.addEventListener("click", function () {
    start.remove();
    playTarot();
})
function playTarot() {
    //牌型亂數
    runRandom();
    function runRandom() {
        for (i = 0; i < 3; i++) {
            cardArray[i] = Math.round(Math.random() * 21);
        }
        for (j = 0; j < 3; j++) {
            cardPage[j] = Math.round(Math.random());
        }
        if (cardArray[0] == cardArray[1] || cardArray[1] == cardArray[2] || cardArray[0] == cardArray[2]) {
            runRandom();
        }
    }

    for (x = 0; x < 3; x++) {
        front[x].style.backgroundImage = "url(" + data[cardArray[x]].page + ")";
        if (cardPage[x] == 1) {
            front[x].classList.add("revers");
        }
    }

    /* 資料區 */
    let timeArray = ["past", "present", "future"];
    for (i = 0; i < 3; i++) {
        front[i].setAttribute("data-title", data[cardArray[i]].name)
        front[i].setAttribute("data-text", data[cardArray[i]][timeArray[i]][cardPage[i]]);
    }
    for (const card of cards) {
        card.addEventListener("click", function () {
            this.classList.add("rotate");
            this.children[1].classList.add("rotate");
            this.children[2].classList.add("rotate");
            aside.classList.add("info");
            aside.children[0].children[0].textContent = this.children[1].getAttribute("data-title");
            aside.children[0].children[1].innerHTML = this.children[1].getAttribute("data-text");
        })
    }
    aside.addEventListener("click", function () {
        this.classList.remove("info");
        
        document.getElementsByTagName("body")[0].appendChild(button);
    })
}

//滑動動畫控制
let slide = document.getElementsByClassName("slide")[0];
let runSlide;

if (window.innerWidth < 1024) {
    run();
} else {
    slide.style.transform = "translateX(0)";
}

window.addEventListener("resize", function () {
    if (window.innerWidth < 1024) {
        run();
    } else {
        slide.style.transform = "translateX(0)";
        clearInterval(runSlide);
    }
})
//手機板控制滑動
function run() {
    let count = 0;
    clearInterval(runSlide);
    runSlide = setInterval(function () {
        count--;
        if (count < -2) {
            count = 0;
        }
        slide.style.transform = "translateX(" + 100 / 3 * count + "%)"
    }, 3000);
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    prev.addEventListener("click", function () {
        count++;
        if (count > 0) {
            count = -2;
        }
        slide.style.transform = "translateX(" + 100 / 3 * count + "%)"
    })
    next.addEventListener("click", function () {
        count--;
        if (count < -2) {
            count = 0;
        }
        slide.style.transform = "translateX(" + 100 / 3 * count + "%)"
    })
}