//CPU
let cpu = [];
randomRun();
function randomRun(){
    for(i=0;i<4;i++){
        cpu[i] = Math.round(Math.random() * 9);
    }
    if(cpu[0] == cpu[1] || cpu[0] == cpu[2] || cpu[0] == cpu[3] || cpu[1] == cpu[2] || cpu[1] == cpu[3] || cpu[2] == cpu[3]){
        randomRun();
    }
    console.log(cpu.join(""))
}

//USER
let user = document.getElementById("user");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let count = document.getElementById("count");
let countNum = Number(count.textContent);
let reset = document.getElementById("reset");
let txt;

btn.addEventListener("click",function(){
    startPlay()
})
user.addEventListener("keypress",function(e){
    if(e.keyCode == 13){
        startPlay();
    }
})

//開始遊戲
function startPlay(){
    countNum--;
    let u = user.value;
    let a = 0;
    let b = 0;
    txt = "";
    //判斷錯誤
    if(isNaN(Number(u))){
        txt = "請輸入數值"
    }else if(u.length < 4){
        txt = "請輸入4位數值"
    }else if(u[0] == u[1] || u[0] == u[2] || u[0] == u[3] || u[1] == u[2] || u[1] == u[3] || u[2] == u[3]){
        txt = "數值請勿重複"
    }else if(Number(u[0]) == cpu[0] && Number(u[1]) == cpu[1] && Number(u[2]) == cpu[2] && Number(u[3]) == cpu[3]){
        success();
        return;
    }else{
        //A
        for(i=0;i<4;i++){
            if(Number(u[i]) == cpu[i]){
                a++;
            }
        }

        //B
        for(i=0;i<4;i++){
            for(j=0;j<4;j++){
                if(Number(u[i]) == cpu[j]){
                    b++;
                }
            }
        }
        b = b - a;
        txt = user.value + "，" + a + "A" + b + "B";
    }

    //生成內容
    let li = document.createElement("li");
    li.textContent = txt;
    result.appendChild(li);
    user.value = "";
    user.focus();
    count.textContent = countNum;

    //次數判斷
    if(countNum <= 0){
        txt = "次數已用完！" + cpu.join("");
        msg();
        // li.innerHTML = "次數已用完！" + "答案：" +cpu.join("");
    }
}


//計時器
let times = 180;
let m,s;
let timeRun;
function play(){
    document.getElementById("start").remove();
    let mins = document.getElementById("mins");
    let sec = document.getElementById("sec");
    timeRun = setInterval(function(){
        times--;
        if(times <= 0){
            times = 0;
            clearInterval(timeRun);
            txt = "時間到！你輸了！" ;
            msg();
        }
        mins.textContent = Math.floor(times / 60);
        sec.textContent = times % 60;
    },1000);
}

//成功猜到
function success(){
    user.value = "";
    count.textContent = countNum;
    txt = "您猜對了！" ;
    msg();
}

//遊戲結束訊息
function msg(){
    let li = document.createElement("li");
    li.textContent = txt;
    result.appendChild(li);
    user.disabled = true;
    btn.disabled = true;
    reset.disabled = false;
    clearInterval(timeRun);
}