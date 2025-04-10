const swiper =  new Swiper(".swiper",{
    slidePerView: 1,
    effect:"creative",
    creativeEffect: {
        prev: { 
            translate: [0, 0, -400],
        },
        next: {

            translate: ["100%", 0, 0],
        },
    },
    loop: true,
    direction: "horizontal",

    autoplay:{
        delay: 4000,
    },
     
    speed: 400,
    spaceBetween: 100,
});

const swiper2 =  new Swiper(".swiper2",{
    slidesPerView: 3,
    spaceBetween: 35,
    slidePerGroup: 1,
    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    LoopfillGroupwithBlank: true,

    autoplay:{
        delay: 5000,
    },
     
    speed: 400,
    breakpoints: {

        500: {
            slidePerView:1,
            
        },

        768: {
            slidePerView: 2,
            
        },

        900: {
            slidePerView: 3,
        
        }

    }
});

const swiper3 =  new Swiper(".swiper3",{
    slidesPerView: 2,
    spaceBetween: 25,
    slidePerGroup: 1,
    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    LoopfillGroupwithBlank: true,

    autoplay:{
        delay: 5000,
    },
     
    speed: 400,
    

    breakpoints: {

        320: {
            slidePerView:1,
            
        },

        768: {
            slidePerView: 2,
            
        },

        968: {
            slidePerView: 2,
        
        }

    }
});

const swiper4 =  new Swiper(".swiper4",{
    slidesPerView: 1,
    spaceBetween: 140,
    slidePerGroup: 1,
    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    LoopfillGroupwithBlank: true,

    autoplay:{
        delay: 5000,
    },
     
    speed: 400,
    

    breakpoints: {

        220: {
            slidePerView:1,
            
        },

        400: {
            slidePerView: 1,
            
        },

        600: {
            slidePerView: 1,
        
        }

    }
});