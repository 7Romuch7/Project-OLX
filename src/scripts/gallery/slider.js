// const viewport = document.getElementById("viewport").offsetWidth;
// const btnNext = document.getElementById("next");
// const btnPrev = document.getElementById("prev");
// const slider = document.querySelector("div.slider");
// const viewSliders = document.querySelectorAll(".viewSlide");
// let viewSlide = 0; 

// viewSliders[0].style.backgroundColor = "green"; 

// btnNext.addEventListener("click", function () {    
//     viewSliders[viewSlide].style.backgroundColor = "red";
    
//     if (viewSlide < 4) {         
//         viewSlide++;
//     } else {         
//         viewSlide = 0;
//     }
    
//     viewSliders[viewSlide].style.backgroundColor = "green";    
//     slider.style.left = -viewSlide * viewport + "px";
// });
 

// btnPrev.addEventListener("click", function () {
    
//     viewSliders[viewSlide].style.backgroundColor = "red";    
//     if (viewSlide > 0) {         
//         viewSlide--; 
//     } else {         
//         viewSlide = 4; 
//     }    
//     viewSliders[viewSlide].style.backgroundColor = "green";    
//     slider.style.left = -viewSlide * viewport + "px";
// });

// 
// export  const addSlider = (item) => {
//     const viewport = item.querySelector(".viewport").offsetWidth;
//     const btnNext = item.querySelector(".next");
//     const btnPrev = item.querySelector(".prev");
//     const slider = item.querySelector("div.slider");
//     // const viewSliders = item.querySelectorAll(".viewSlide");
//     let viewSlide = 0; 


//     btnNext.addEventListener("click",  function (e) {    
//         e.preventDefault();
        
//         if (viewSlide < 1) {         
//             viewSlide++;
//         } else {         
//             viewSlide = 0;
//         }

//         slider.style.left = -viewSlide * viewport + "px";
//     });
    

//     btnPrev.addEventListener("click", function () {
        
 
//         if (viewSlide > 0) {         
//             viewSlide--; 
//         } else {         
//             viewSlide = 1; 
//         }    

//         slider.style.left = -viewSlide * viewport + "px";
//     });
// }

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



