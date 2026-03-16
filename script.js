const roles = [
"Java Developer",
"Python Developer",
"Full Stack Developer",
"Software Engineer"
];

let i = 0;
let j = 0;
let current = "";
let deleting = false;

function type(){

current = roles[i];

if(!deleting){
document.getElementById("typing").textContent =
current.substring(0,j++);
}else{
document.getElementById("typing").textContent =
current.substring(0,j--);
}

if(j === current.length){
deleting = true;
setTimeout(type,1200);
return;
}

if(j === 0){
deleting = false;
i = (i+1) % roles.length;
}

setTimeout(type,100);

}

type();