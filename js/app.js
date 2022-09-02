var carosulSlide = document.querySelector('.carousel-inner').children;
var nextSlide = document.querySelector('#right');
var prevSlide = document.querySelector('#left'); 
var index = 0;

var totalSlide = carosulSlide.length;

console.log(totalSlide)

nextSlide.onclick = function () {
    next('next');
    
}

prevSlide.onclick = function () {
 next('prev');
 
}

function next(direction) {
    if(direction=='next') {
        index++;

        if(index==totalSlide)
        {
            index=0;
        }
    }

    else {
        if(index==0)
        {
            index = totalSlide-1;
        }
        else 
        index--;
    }
  
    for(i=0;i<carosulSlide.length;i++)
    {
        carosulSlide[i].classList.remove('active');
    
    }
    carosulSlide[index].classList.add('active');    
}