let bool =true
let menu = document.getElementsByTagName("menu")[0]
let nav =   document.getElementsByTagName("nav")[0].addEventListener("click",function(){
    if(bool){
        menu.classList.add("open");
        for (const bar of this.children) {
            bar.classList.add("close")
        }
    }else{
        menu.classList.remove("open");
        for (const bar of this.children) {
            bar.classList.remove("close")
        }
    }
    bool = !bool;
})
//版權年限
let years = document.getElementsByClassName("year");
for (const year of years) {
    year.textContent = new Date().getFullYear();
}
//gotop
let gotop = document.createElement("a");
let gotopStyle = {
    width: "3.5em",
    height: "3.5em",
    lineHeight: "3.5em",
    position: "fixed",
    bottom: "1em",
    right: "1em",
    backgroundColor: "#0008",
    color: "#fff",
    textAlign: "center",
    fontWeight: "900",
    borderRadius: "50%",
    zIndex: "50",
}
gotop.setAttribute("href","#");
gotop.setAttribute("id","gotop");
gotop.textContent = "Top";
for (const key in gotopStyle) {
    gotop.style[key] = gotopStyle[key];
}
document.getElementsByTagName("body")[0].appendChild(gotop);

//Loading
let load = document.createElement("div");
let loading = document.createElement("div");
let bodyLoad = document.getElementsByTagName("body")[0];
load.setAttribute("id","load");
loading.classList.add("loading");
let loadId = {
    width: "100%",
    height: "100vh",
    position: "fixed",
    bottom: 0,
    right: 0,
    backgroundColor: "#0008",
    backdropFilter:"blur(4px)",
    zIndex: "70"
}
let loadingStyle = {
    width: "250px",
    height: "250px",
    position: "fixed",
    left: "calc(50vw - 125px)",
    top: "calc(50vh - 125px)",
    borderRadius: "50%",
    zIndex: "75",
    border:"30px solid #afa",
    clipPath:"polygon(0 0,50% 0,100% 0,0 100%)"
}
let bodyLoadStyle = {
    width: "100%",
    height: "100vh",
    overFlow:"hidden"
}
for (const key in loadId) {
    load.style[key] = loadId[key];
}
for (const key in bodyLoadStyle) {
    bodyLoad.style[key] = bodyLoadStyle[key];
}
for (const key in loadingStyle) {
    loading.style[key] = loadingStyle[key];
}
load.appendChild(loading);
bodyLoad.appendChild(load);

let x = 0;
let run = setInterval(function(){
    x+=3;
    loading.style.transform = "rotate(" + x + "deg)";
    if(x >= 500){
        clearInterval(run);
        document.getElementById("load").remove();
        bodyLoad.style.height = "auto";
        bodyLoad.style.overFlow = "auto";
    }
})