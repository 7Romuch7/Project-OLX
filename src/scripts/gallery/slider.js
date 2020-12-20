export  const addSlider = (item) => {
    const viewport = item.querySelector(".viewport").offsetWidth;
    const btnNext = item.querySelector(".next");
    const btnPrev = item.querySelector(".prev");
    const slider = item.querySelector("div.slider");
    // const viewSliders = item.querySelectorAll(".viewSlide");
    let viewSlide = 0; 


    btnNext.addEventListener("click",  function () {    

        
        if (viewSlide < 4) {         
            viewSlide++;
        } else {         
            viewSlide = 0;
        }

        slider.style.left = -viewSlide * viewport + "px";
    });
    

    btnPrev.addEventListener("click", function () {
        
        
        if (viewSlide > 0) {         
            viewSlide--; 
        } else {         
            viewSlide = 4; 
        }    

        slider.style.left = -viewSlide * viewport + "px";
    });

}

