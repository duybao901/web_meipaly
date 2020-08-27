// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
// Show modal
window.addEventListener('load', function () {

    var menu = document.querySelector('.menu i');
    var modal = document.querySelector('.modal-menu')
    var modalBlur = document.querySelector('.modal-menu__blur');
    var exitModal = document.querySelector('.modal-menu__exit');
    var homeSlick = document.querySelectorAll('.slick-item');

    menu.addEventListener('click', () => {
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
        modal.style.transition = 'all .4s ease-out'
        modalBlur.style.transition = 'all .4s ease-out'
        modalBlur.style.transform = 'translateX(0px)';
    })

    exitModal.addEventListener('click', () => {
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        modalBlur.style.transform = 'translateX(100%)';
        modal.style.transition = 'all .2s ease-out'
        modalBlur.style.transition = 'all .2s ease-out'
    })

    // Toggle search
    var search = document.querySelector('.search i');
    var searchContent = document.querySelector('.search__content');
    search.addEventListener('click', () => {
        searchContent.classList.toggle('search__content--active')
    })

    // Home slider
    // new Glider(document.querySelector('.glider'), {
    //     type: 'carousel',
    //     slidesToShow: 1,
    //     perView:1,
    //     focusAt: 'center',
    //     autoplay:2000,
    //     dots: '.dots',
    //     rewind: true,
    //     duration: 0.5,
    //     arrows: {
    //         prev: '.glider-prev',
    //         next: '.glider-next'
    //     }
    // });
    $('.slick').slick({
        dots: true,
        type: 'carousel',
        draggable: false,
        autoplay:true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        arrows: true,
        speed:1100,
        nextArrow: '.home-arrow-next',
        prevArrow: '.home-arrow-prev'
        
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (nextSlide === 0) {
            gsap.to('.slick-item__content h3', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay:.8
            })
            gsap.to('.slick-item__content h1', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 1
            })
            gsap.to('.slick-item__content button', {
                opacity: 1,
                duration: 0.4,
                delay: 1.6,
                y:0,
            })
        } else {
            gsap.to('.slick-item__content h3', {
                y: -30,
                opacity: 0
            })
            gsap.to('.slick-item__content h1', {
                y: -30,
                opacity: 0,
            })
            gsap.to('.slick-item__content button', {
                opacity: 0,
                y:40
            })
        }
        if (nextSlide === 1) {
            gsap.to('.slick-item-2__content-2 div', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay:0.4
            })
            gsap.to('.slick-item-2__content-2 h1', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay:0.8
            })
            gsap.to('.slick-item-2__content-2 > p', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 1.2
            })
            gsap.to('.slick-item-2__content-2  button', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 1.4
            })
        } else {
            gsap.to('.slick-item-2__content-2 div', {
                y: 50,
                opacity: 0,
                duration: 0.8,
            })
            gsap.to('.slick-item-2__content-2 h1', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.4
            })
            gsap.to('.slick-item-2__content-2 > p', {
                y: 70,
                opacity: 0,
                duration: 0.8,
                delay:  .4
            })
            gsap.to('.slick-item-2__content-2  button', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 1.4
            })
        }
  
        if (nextSlide === 2) {     
            gsap.to('.slick-item-3__content-3 h1', {
                x: 0,
                opacity: 1,
                duration: .8,
                delay: 0.8,
            })
            gsap.to('.slick-item-3__content-3 p', {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 1.2,
            })
            gsap.to('.slick-item-3__content-3 span', {
                height:"80%",
                opacity: 1,
                duration: .6,
                delay: 2,
            })
            gsap.to('.slick-item-3__content-3 button', {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 2,
            })
        } else {
            gsap.to('.slick-item-3__content-3 h1', {
                x: 200,
                opacity: 0,
                duration:1
            })
            gsap.to('.slick-item-3__content-3 p', {
                x: -300,
                opacity: 0,
                duration: 1
            })
            gsap.to('.slick-item-3__content-3 span', {
                height: 0,
                opacity: 0,
                duration: 1,
            })
            gsap.to('.slick-item-3__content-3 button', {
                y:60,
                opacity: 0,
                duration: 1,
            })
        }
    });
    // var homeNextArrow = document.querySelector('.home-arrow-next');
    // var homePrevArrow = document.querySelector('.home-arrow-prev');

    if (homeSlick[0].classList[3] === 'slick-active') {
        gsap.to('.slick-item__content h3', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay:.8
        })
        gsap.to('.slick-item__content h1', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1
        })
        gsap.to('.slick-item__content button', {
            y:0,
            opacity: 1,
            duration: 0.4,
            delay: 1.6
        })
    } else {
        gsap.to('.slick-item__content h3', {
            y: -30,
            opacity: 0
        })
        gsap.to('.slick-item__content h1', {
            y: -30,
            opacity: 0,
        })
        gsap.to('.slick-item__content button', {
            opacity: 0
        })
    }
    

    // homeNextArrow.addEventListener('click', () => {
    //     if (homeSlick[0].classList[3] === 'slick-active') {
    //         gsap.to('.slick-item__content h3', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //         })
    //         gsap.to('.slick-item__content h1', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //             delay: 1
    //         })
    //         gsap.to('.slick-item__content button', {
    //             opacity: 1,
    //             duration: 0.4,
    //             delay: 1
    //         })
    //     } else {
    //         gsap.to('.slick-item__content h3', {
    //             y: -30,
    //             opacity: 0
    //         })
    //         gsap.to('.slick-item__content h1', {
    //             y: -30,
    //             opacity: 0,
    //         })
    //         gsap.to('.slick-item__content button', {
    //             opacity: 0
    //         })
    //     }
    // })
    // homePrevArrow.addEventListener('click', () => {
    //     if (homeSlick[0].classList[3] === 'slick-active') {
    //         gsap.to('.slick-item__content h3', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //         })
    //         gsap.to('.slick-item__content h1', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //             delay: 1
    //         })
    //         gsap.to('.slick-item__content button', {
    //             opacity: 1,
    //             duration: 0.4,
    //             delay: 1
    //         })
    //     } else {
    //         gsap.to('.slick-item__content h3', {
    //             y: -30,
    //             opacity: 0
    //         })
    //         gsap.to('.slick-item__content h1', {
    //             y: -30,
    //             opacity: 0,
    //         })
    //         gsap.to('.slick-item__content button', {
    //             opacity: 0
    //         })
    //     }
    // })


    // // ******** 2 ********
    // if (homeSlick[1].classList[4] === 'slick-active') {     
    //     gsap.to('.slick-item-2__content-2 div', {
    //         y: 0,
    //         opacity: 1,
    //         duration: 0.8,
    //     })
    //     gsap.to('.slick-item-2__content-2 h1', {
    //         y: 0,
    //         opacity: 1,
    //         duration: 0.8,
    //         delay:0.8
    //     })
    //     gsap.to('.slick-item-2__content-2 > p', {
    //         y: 0,
    //         opacity: 1,
    //         duration: 0.8,
    //         delay: 1.2
    //     })
    //     gsap.to('.slick-item-2__content-2  button', {
    //         y: 0,
    //         opacity: 1,
    //         duration: 0.8,
    //         delay: 1.4
    //     })
    // } else {
    //     gsap.to('.slick-item-2__content-2 div', {
    //         y: 50,
    //         opacity: 0,
    //         duration: 0.8,
    //     })
    //     gsap.to('.slick-item-2__content-2 h1', {
    //         y: 50,
    //         opacity: 0,
    //         duration: 0.8,
    //         delay: 0.4
    //     })
    //     gsap.to('.slick-item-2__content-2 > p', {
    //         y: 70,
    //         opacity: 0,
    //         duration: 0.8,
    //         delay:  .4
    //     })
    //     gsap.to('.slick-item-2__content-2  button', {
    //         y: 30,
    //         opacity: 0,
    //         duration: 0.8,
    //         delay: 1.4
    //     })
    // }
    // homeNextArrow.addEventListener('click', () => {
    //     if (homeSlick[1].classList[4] === 'slick-active') {
    //         gsap.to('.slick-item-2__content-2 div', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 1,
    //         })
    //         gsap.to('.slick-item-2__content-2 h1', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.4,
    //             delay:.8
    //         })
    //         gsap.to('.slick-item-2__content-2 > p', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //             delay: 1.2
    //         })
    //         gsap.to('.slick-item-2__content-2  button', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //             delay: 1.4
    //         })
    //     } else {
    //         gsap.to('.slick-item-2__content-2 div', {
    //             y: 50,
    //             opacity: 0,
    //             duration: 0.4
    //         })
    //         gsap.to('.slick-item-2__content-2 h1', {
    //             y: 50,
    //             opacity: 0,
    //             duration: 0.4,
    //             delay: 0.4
    //         })
    //         gsap.to('.slick-item-2__content-2 > p', {
    //             y: 70,
    //             opacity: 0,
    //             duration: 0.8,
    //             delay: .4
    //         })
    //         gsap.to('.slick-item-2__content-2  button', {
    //             y: 30,
    //             opacity: 0,
    //             duration: 0.8,
    //             delay: 1.4
    //         })
    //     }
    // })
    // homePrevArrow.addEventListener('click', () => {
    //     if (homeSlick[1].classList[4] === 'slick-active') {
    //         gsap.to('.slick-item-2__content-2 div', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 1,
    //         })
    //         gsap.to('.slick-item-2__content-2 h1', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.4,
    //             delay: .8
    //         })
    //         gsap.to('.slick-item-2__content-2 > p', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //             delay: 1.2
    //         })
    //         gsap.to('.slick-item-2__content-2  button', {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //             delay: 1.4
    //         })
    //     } else {
    //         gsap.to('.slick-item-2__content-2 div', {
    //             y: 50,
    //             opacity: 0,
    //             duration: 0.4,
    //         })
    //         gsap.to('.slick-item-2__content-2 h1', {
    //             y: 50,
    //             opacity: 0,
    //             duration: 0.4,
    //             delay: 0.4
    //         })
    //         gsap.to('.slick-item-2__content-2 > p', {
    //             y: 70,
    //             opacity: 0,
    //             duration: 0.8,
    //             delay: .4
    //         })
    //         gsap.to('.slick-item-2__content-2  button', {
    //             y: 30,
    //             opacity: 0,
    //             duration: 0.8,
    //             delay: 1.4
    //         })
    //     }
    // })


    
    // // ******** 3 ********
    // if (homeSlick[1].classList[4] === 'slick-active') {
       
        
    // } else {
       
        
        
    // }
    // homeNextArrow.addEventListener('click', () => {
    //     if (homeSlick[1].classList[4] === 'slick-active') {
           
            
            
    //     } else {
            
            
            
    //     }
    // })
    // homePrevArrow.addEventListener('click', () => {
    //     if (homeSlick[1].classList[4] === 'slick-active') {
           
            
            
    //     } else {
         
            
            
    //     }
    // })
    
    // Services slider
    $('.services__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        speed: 1500,
        nextArrow: '.services__slider-next',
        prevArrow: '.services__slider-prev'

    });

    // Showcase
    $('.showcase__isotope-items').isotope({
        // options...
        itemSelector: '.showcase__isotope-item',
        layoutMode: 'fitRows'
    });

    // Isopote
    $('.showcase__button-group button').click(function () {

        // add class
        $('.showcase__button-group button').removeClass('showcase__filter-button--active');
        $(this).addClass('showcase__filter-button--active');

        // filter
        var selector = $(this).attr('data-filter');
        $('.showcase__isotope-items').isotope({
            // options...
            filter  :  selector
        });
    })

})