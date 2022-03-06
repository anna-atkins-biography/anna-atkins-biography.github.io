let nav = document.querySelector(".primary-navigation");
let navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  
  let visibility = nav.getAttribute("data-visible");
  
  if(visibility === "false"){
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else{
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }

});

//Photographer Page Gallery

//Variables
//Fern
let fernPrevious = document.getElementById("fern-previous");
let fernNext = document.getElementById("fern-next");
let fernImg = document.getElementById("fern-image");
let fernCap = document.getElementById("fern-caption");

//Agae
let algaePrevious = document.getElementById("algae-previous");
let algaeNext = document.getElementById("algae-next");
let algaeImg = document.getElementById("algae-image");
let algaeCap = document.getElementById("alga-caption");

//Image Arrays
//Fern
const fernImages = [
    {src: "imgs/ferns/fern-array-00.png",
    alt: "Fern 1",
    caption:"Lastrea dilatato"},
    {src: "imgs/ferns/fern-array-01.png",
    alt: "Fern 2",
    caption: "Gleichenia immersa"},
    {src: "imgs/ferns/fern-array-02.png",
    alt: "Fern 3",
    caption:"Polypodium dryopteris"},
    {src: "imgs/ferns/fern-array-03.png",
    alt: "Fern 4",
    caption:"Blechnum boreale"},
    {src: "imgs/ferns/fern-array-04.png",
    alt: "Fern 5",
    caption:"Asplenium praemorsum"},
    {src: "imgs/ferns/fern-array-05.png",
    alt: "Fern 6",   
    caption:"From Ceylon"},
];

//Algae
const algaeImages = [
    {src: "imgs/algae/algae-array-00.png",
    alt: "Algae 1",
    caption:"Ptilota sericea"},
    {src: "imgs/algae/algae-array-01.png",
    alt: "Algae 2",
    caption:"Polysiphonia fastigiata"},
    {src: "imgs/algae/algae-array-02.png",
    alt: "Algae 3",
    caption:"Nitophyllum Bonnemaisoni"},
    {src: "imgs/algae/algae-array-03.png",
    alt: "Algae 4",
    caption:"Corallina elgongata"},
    {src: "imgs/algae/algae-array-04.png",
    alt: "Algae 5",
    caption:"Cystoseira Granulata"},
    {src: "imgs/algae/algae-array-05.png",
    alt: "Algae 6",
    caption:"Callithamnion plumula"},
];

let imgNumFern = 0;
let imgNumAlgae = 0;
//Next Key
//Fern
fernNext.addEventListener("click", () => {
  if(imgNumFern < fernImages.length - 1){
    imgNumFern += 1;
  }else{
    imgNumFern = 0;
  }
  showFernImage();

});
//Algae
algaeNext.addEventListener("click", () => {
  if(imgNumAlgae < algaeImages.length - 1){
    imgNumAlgae += 1;
  }else{
    imgNumAlgae = 0;
  }
  showAlgaeImage();
});

//Previous Key
//Fern
fernPrevious.addEventListener("click", () => {
  if(imgNumFern === 0){
    imgNumFern = fernImages.length - 1;
  }else{
    imgNumFern -= 1;
  }
  showFernImage();
});

//Algae
algaePrevious.addEventListener("click", () => {
  if(imgNumAlgae === 0){
    imgNumAlgae = algaeImages.length - 1;
  }else{
    imgNumAlgae -= 1;
  }
  showAlgaeImage();
});

//Show Images
//Fern
function showFernImage(){
  fernImg.src = fernImages[imgNumFern].src;
  fernImg.alt = fernImages[imgNumFern].alt;
  fernCap.innerHTML = fernImages[imgNumFern].caption;
}

function showAlgaeImage(){
  algaeImg.src = algaeImages[imgNumAlgae].src;
  algaeImg.alt = algaeImages[imgNumAlgae].alt;
  algaeCap.innerHTML = algaeImages[imgNumAlgae].caption;
}

//Algae 