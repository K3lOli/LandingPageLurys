const anime = document.querySelectorAll('[data-anime]');
const anime1 = document.querySelectorAll('[data-anime1]');
const div = document.getElementById('QuemSomos')
const animationClass = 'animate';

// function init() {
//     anime.forEach(function (e) {
//         e.classList.add('animate');
//     }
// }

function init() {
    anime.forEach(function (e) {
        e.classList.add('animate')
    })
}

function animeScroll() {
    console.log(div.offsetTop)
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.1);
    anime1.forEach(function (e) {
        if ((windowTop) > e.offsetTop) {
            e.classList.add('animate')
            console.log(e);
            console.log(e.offsetTop);
            // console.log(windowTop)
        }
        else {
            e.classList.remove('animate')
        }
    })
}

// function animeScroll() {
//     const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
//     console.log(windowTop);
//     anime.forEach(function (e) {
//         if ((windowTop) > e.offsetTop) {
//             e.classList.add('animate')
//         }
//         else {
//             e.classList.remove('animate')
//         }
//     })

// }

window.addEventListener('scroll', function () {
    animeScroll();
})