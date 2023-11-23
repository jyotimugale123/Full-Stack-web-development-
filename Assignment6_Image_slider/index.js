var btnPrev=document.querySelector("#btnPrev")
var btnNext=document.querySelector("#btnNext")
var counter=0;
var slides=document.querySelectorAll(".slide")
console.log(slides)
slides.forEach(function(slide,index){
slide.style.left=`${index*100}%`;
})
btnPrev.addEventListener("click",function(){
counter--;
console.log(counter)
if(counter<0){
counter=0;
}
slides.forEach(function(slide){
slide.style.transform=`translateX(${counter*100}%)`
})
})
btnNext.addEventListener("click",function(){
counter++;
console.log(counter)
if(counter>3){
counter=0;
}
slides.forEach(function(slide){
slide.style.transform=`translateX(-${counter*100}%)`
})
})
function sliding(){
counter++;
console.log(counter)
if(counter>3){
counter=0;
}
slides.forEach(function(slide){
slide.style.transform=`translateX(-${counter*100}%)`
})
}
setInterval(sliding,3000);
