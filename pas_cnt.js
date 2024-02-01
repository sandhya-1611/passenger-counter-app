//document.getElementById("count").innerText = 4;
let saveEl=document.getElementById("save-el");
let cnnt=document.getElementById("count")
let cnt=0

function increment()
{
    cnt+=1
    cnnt.textContent=cnt
}

function save()
{
    let countStr = cnt + " - "
    cnt=0
    saveEl.innerText += countStr
    cnnt.textContent=0
    cnt=0
}