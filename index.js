

function showSidebar(){
    const sideBar = document.querySelector(".side-bar");
    sideBar.style.display ="flex";
}
function hide(){
    const hideSideBar = document.querySelector('.side-bar');
    hideSideBar.style.display = "none"
}
let inC = document.querySelector(".inner-cursor");
let oC = document.querySelector(".outer-cursor");
document.addEventListener("mousemove",moveCursor);
function moveCursor(e) {
    let x = e.x;
    let y = e.y;

inC.style.left = `${x}px`;
inC.style.top = `${y}px`;
oC.style.left = `${x}px`;
oC.style.top = `${y}px`;
console.log(x,y);
}
let links = document.querySelectorAll("a");
console.log(links);
links.forEach(link =>{
    link.addEventListener("mouseover",()=>{
        inC.classList.add("grow")
    });
    link.addEventListener("mouseleave",()=>{
        inC.classList.remove("grow")
    })
})