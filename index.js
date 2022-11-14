let colorArray = [
  "red",
  "blue",
  "green",
  "orange",
  "pink",
  "paleturquoise",
  "brown",
  "black",
  "violet",
  "indigo",
  "yellow"
];

let color = document.querySelector(".color");
console.log(color);
for (let i = 0; i < 10; i++) {
  color.innerHTML += `
  <div class="align">
  <li style="background : ${colorArray[i]}  " class="${colorArray[i]} inColor">
     <div class="align" >
        <div></div>
        <div>${colorArray[i]}</div>
     </div> </li>
    </div> `;
}
let incolor = document.querySelectorAll(".inColor");

for (let index = 0; index < 10; index++) {
  incolor[index].addEventListener("click", function () {
    document.body.style.background = colorArray[index];
    localStorage.setItem("notes", colorArray[index]);
  });
}

let notes = localStorage.getItem("notes");

if (notes != null) {
  document.body.style.background = notes;
}
