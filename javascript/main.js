// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
// Show modal
window.addEventListener('load', function () {

    var menu = document.querySelector('.menu i');
    var modal = document.querySelector('.modal-menu')
    var modalBlur = document.querySelector('.modal-menu__blur');
    var exitModal = document.querySelector('.modal-menu__exit');
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
    new Glider(document.querySelector('.glider'), {
        type: 'carousel',
        slidesToShow: 1,
        perView:1,
        focusAt: 'center',
        autoplay:2000,
        dots: '.dots',
        rewind: true,
        duration: 0.5,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
})