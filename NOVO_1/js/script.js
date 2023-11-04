var imageSlide = document.querySelector(".ruler")
var images = document.querySelectorAll("#pic")




for (let index = 1; index < images.length; index++) {
    const element = images[index];
    element.style.display = "none"
}

setTimeout(slide, 2000)

 var indexShow = 1
function slide(){
       
        const element = images[indexShow];
        
        
        
        
        if(indexShow == images.length-1){
            indexShow = 1
            images[indexShow].style.display = "none"
            images[0].style.display = "block"
            
        } else {
            images[indexShow-1].style.display = "none"
            element.style.display = "block"
            indexShow++;
        }
       
        
        setTimeout(slide, 3500)
}