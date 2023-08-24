let counter = document.querySelector(".counter");
let reset = document.querySelector(".reset");
let count = document.querySelector(".count");
let h3 = document.querySelector("h3");

h3.innerText = localStorage.getItem("Tasbiih");
console.log(localStorage);

count.addEventListener("click", ()=> {
  h3.style ='display : block';
  h3.innerText ++;
  saveLocal();  
});

reset.addEventListener("click", ()=> {
  h3.style ='display : block';
  h3.innerText = 0;
  saveLocal();
})
function saveLocal() {
  localStorage.setItem("Tasbiih",h3.innerText);

}