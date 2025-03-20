let cpu,txt;
    let min = 0;
    let max = 100;
    let user = document.getElementById("user");
    let btn = document.getElementById("btn");
    let result = document.getElementById("result");
    cpuRandom();
    function cpuRandom(){
        cpu = Math.ceil(Math.random()*99);
        if(cpu == 0){
            cpuRandom();
        }
    }
    console.log(cpu);
    btn.addEventListener("click",function(){
        play();
    })
    user.addEventListener("keydown",function(e){
        if(e.keyCode == 27){
            user.value = "";
        }else if(e.keyCode == 13){
            play();
        }
    })

    function play(){
        let u = Number(user.value);
        console.log(u)
        if(isNaN(u)){
            txt = "請輸入數值";
        }else if(u<min){
            txt = "不可低於最小值"
        }else if(u>max){
            txt = "不可高於最大值"
        }else if(u==0){
            txt = "請輸入數值"
        }else if(u == cpu){
            txt = "答案正確"
            user.disabled = true;
            btn.disabled = true;
            document.getElementById("reset").disabled = false;
        }else if(u>min && u<cpu){
            min = u;
            txt = min + " ~ " + max;
        }else if(u<max && u>cpu){
            max = u;
            txt = min + " ~ " + max;
        }else{
            txt = "未知的錯誤";
        }
        let li = document.createElement("li");
        li.textContent = txt;
        result.appendChild(li);
        user.value = "";
        user.focus();
    }