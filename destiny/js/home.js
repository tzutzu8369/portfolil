let count = 0;
let run;
let box = document.getElementsByClassName("box")[0];

if (window.innerWidth <= 920) {
    runSlide()
} else {
    box.style.transform = "translateX(0)";
}

window.addEventListener("resize", function () {
    if (window.innerWidth >= 920) {
        clearInterval(run);
        box.style.transform = "translateX(0)";
    } else {
        runSlide();
    }
})

function runSlide() {
    clearInterval(run);
    run = setInterval(function () {
        count++;
        if (count >= 3) {
            count = 0
        }
        box.style.transition = "all 800ms ease";
        box.style.transform = "translateX(" + count * -280 + "px)";
    }, 2000);
    document.getElementById("prev").addEventListener("click", function () {
        count--;
        if (count < 0) {
            count = 2
        }
        box.style.transform = "translateX(" + count * -280 + "px)";
    })
    document.getElementById("next").addEventListener("click", function () {
        count++;
        if (count >= 3) {
            count = 0
        }
        box.style.transform = "translateX(" + count * -280 + "px)";
    })
}
let years = document.getElementsByClassName("year");
for (const year of years) {
    year.textContent = new Date().getFullYear();}