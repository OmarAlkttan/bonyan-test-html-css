const img = document.getElementById("hero-img");
  const heroImgSmall = document.getElementById("hero-img-small");
  const heroImgBig = document.getElementById("hero-img-big");

window.addEventListener('resize', function(e){
  if(window.innerWidth <551){
  
    heroImgBig.removeChild(heroImgBig.firstElementChild); 
    heroImgSmall.appendChild(img);
  }else{
    heroImgSmall.removeChild(heroImgSmall.firstElementChild); 
    heroImgBig.appendChild(img);
  }
}, true)

