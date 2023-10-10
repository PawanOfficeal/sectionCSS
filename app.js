//js file:
let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");
let sec3 = document.querySelector(".sec3");
let sec4 = document.querySelector(".sec4");
let sec5 = document.querySelector(".sec5");


let d1 = document.querySelector(".d1");
let d2 = document.querySelector(".d2");
let d3 = document.querySelector(".d3");
let d4 = document.querySelector(".d4");
let d5 = document.querySelector(".d5");

const section = document.querySelector(".section");
const sectionsAll = document.querySelectorAll(".section");
const diamond = document.querySelector(".diamond");
const diamondsAll = document.querySelectorAll(".diamond");

//SECTION 1
sec1.addEventListener("mouseover",()=>{
    d1.classList.add("changeDiamondCSS1");
    d1.style.display = "block";
});
sec1.addEventListener("mouseleave",()=>{
    d1.classList.remove("changeDiamondCSS1");
});

//SECTION 2
sec2.addEventListener("mouseover",()=>{
    d2.classList.add("changeDiamondCSS1");
    d2.style.display = "block";
});
sec2.addEventListener("mouseleave",()=>{
    d2.classList.remove("changeDiamondCSS1");
});

//SECTION 3
sec3.addEventListener("mouseover",()=>{
    d3.classList.add("changeDiamondCSS1");
    d3.style.display = "block";
});
sec3.addEventListener("mouseleave",()=>{
    d3.classList.remove("changeDiamondCSS1");
});

//SECTION 4
sec4.addEventListener("mouseover",()=>{
    d4.classList.add("changeDiamondCSS1");
    d4.style.display = "block";
});
sec4.addEventListener("mouseleave",()=>{
    d4.classList.remove("changeDiamondCSS1");
});

//SECTION 5
sec5.addEventListener("mouseover",()=>{
    d5.classList.add("changeDiamondCSS1");
    d5.style.display = "block";
});
sec5.addEventListener("mouseleave",()=>{
    d5.classList.remove("changeDiamondCSS1");
});




   





