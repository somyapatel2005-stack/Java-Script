/*let heading = document.getElementById("heading");
heading.innerText = "My Mum Is the Best!";
heading.style.color = "Purple";

console.dir(window); 
document.body.style.background = "cyan";*/

//let boxes = document.getElementsByClassName("box");
/*for (let i = 0; i<=boxes.length;i++){
    boxes[i].innerText = `Sonali ${i+1}`;
}
let para = document.getElementsByTagName("p");

for(let i=0 ; i<para.length ;i++){
    para[i].style.color = "red";
}
//let box = document.querySelector(".box");
//box.innerText = "Only First Box changed";

let divs = document.querySelectorAll(".box");
let idx = 1;
for(div of divs){
    div.innerText = ` Unique ${idx}`;
    idx++;
}

let BTN = document.getElementById("btn");
BTN.onclick = () => {
    let a = 5;
    let b = 2;
    let c = a + b;
    console.log("add :" , c);
};
function getMessage() {
    alert("Welcome");
};

let BTN = document.getElementById("btn");
BTN.addEventListener("click",function(){
    document.getElementById("text").innerText = "I am a princess";
    document.getElementById("text").style.color="Red";
});
let boxes = document.getElementsByClassName("box");
BTN.addEventListener("mouseover",function(){
    for( box of boxes){
    boxes.style.background = "Red";
    }
});

//take a button which is used for toggling the mode = dark or light
let BTN = document.getElementById("ModeChange");
let darkMode = false;

BTN.addEventListener("click",function(){
    if(darkMode==false){
        document.body.style.background = "pink";
       
        darkmode = true;
    }else{
        document.body.style.background = "yellow";
        darkmode = false;
    }
});*/

//dom -  festures : main object - document
     //   work: get elementby id , getelementbyclass

//bom - features: main object - browser
   //     work: browser window, URL , Alert function , location , Open confirm

   console.dir(window);
   //window.location.href = "index.html";
  // window.location.href = "https://www.google.com";
   //window.alert("r u somya ? no then fuck off")
  // window.confirm("do u really wanna submit");
   window.open("https://www.google.com");

   //json
   // important vvvv - conversion object to json - we use JSON.stringify(bioData)
   //vice versa - JSON.parse(jsonData)

   let bioData = {
    name : "Somya",
    age : "22",
    Designation : "google head",
 };
 
 console.log(bioData.name);
 let jsonData = JSON.stringify(bioData);
 console.log(jsonData);

 //json to object 

 let objData = JSON.parse(jsonData);
 console.log(objData);