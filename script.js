function updateClock(){
    const now=new Date();
    document.getElementById("time").innerText=now.toLocaleTimeString();
}
setInterval(updateClock,1000);
updateClock();

function addNote(){
    const input=document.getElementById("noteInput");
        const text=input.value;
        if(text==="")return;
        const li=document.createElement("li");
        li.innerText=text;
        const btn=document.createElement("button");
        btn.innerHTML="&#10060;";
        btn.onclick=function(){
            li.remove();
        };
        li.appendChild(btn);
        document.getElementById("noteList").appendChild(li);
        input.value="";
}
const quotes=[
    "Stay consistent,success follows!",
    "Small steps every day matter!",
    "Dispiline beats motivation!",
    "Keep going,you are doing great!"
];
function newQuote(){

const random=Math.floor(Math.random()*quotes.length);
document.getElementById("quote").innerText=quotes[random];
}