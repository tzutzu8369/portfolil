 /* 資料串接 */
 let charT = document.getElementsByClassName("action")[0];
 let mainText = [charT.getAttribute("title"),charT.getAttribute("data-text")];
 let box = document.getElementsByClassName("box")[0];
 let h1 = document.createElement("h1");
 h1.textContent = mainText[0];
 let hr = document.createElement("hr");
 let ol = document.createElement("ol");
 for (const key in datas[mainText[1]]) {
    let li = document.createElement("li");
    li.classList.add("item");
    li.textContent = key;
    ol.appendChild(li);
 }
 let p = document.createElement("p");
 p.classList.add("content","none");
 let button = document.createElement("button");
 button.classList.add("btn");
 button.setAttribute("type","button");
 button.textContent = "開始抽獎";
 box.appendChild(h1);
 box.appendChild(hr);
 box.appendChild(ol);
 box.appendChild(p);
 box.appendChild(button);
  /* 四個按鈕監聽 */
 /* 標題監聽 */
 let items = document.getElementsByClassName("item");
 let content = document.getElementsByClassName("content")[0];
 for (const item of items) {
     item.addEventListener("click",function(){
         /* 內容決定 */
         let runRandom = Math.floor(Math.random() * datas[mainText[1]][this.textContent].length)
         let textAll = datas[mainText[1]][this.textContent][runRandom];
         let textArray = textAll.split("：")
         content.innerHTML = textArray[0] + "<br>" + textArray[1];

         /* 設定樣式 */
         for (const itembtn of items) {
             itembtn.classList.remove("action");
         }  
         this.classList.add("action");
         let titleTxt = this.textContent;
         /*抽籤按鈕*/
         let btn = document.getElementsByClassName("btn")[0].addEventListener("click",function(){
             let load = document.getElementById("load");
             load.classList.toggle("none");
             content.classList.toggle("none");
             document.getElementsByTagName("ol")[0].classList.toggle("none");
             setTimeout(function(){
                 load.remove()
             }, 5000)
             h1.textContent = titleTxt;
             this.innerHTML = "<i class='fa-solid fa-rotate-left'></i> 再抽一次";
             this.setAttribute("onclick","window.location.reload()");
         })
     })
 }