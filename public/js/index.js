var HiddenSections = document.querySelectorAll(".HiddenSections")
setTimeout(() => {
    for (let i = 0; i < HiddenSections.length; i++) {
        HiddenSections[i].classList.remove('display')
    }
}, 6 * 1000)

document.addEventListener('scroll', () => {
    var Elm = document.getElementById("Skills")
    var ElmTop = Elm.getBoundingClientRect().top
    var WindowHeight = window.innerHeight;
    if (ElmTop < WindowHeight - 100) {
        Elm.classList.add('active')
    } else {
        Elm.classList.remove('active')
    }
})





var index = 1
SlideShow(index)


function NextSlide(n) {
    SlideShow(index += n)
}

function SlideShow(num) {
    var SlidesCol = document.querySelectorAll(".SlideDiv");
    var Lenght = SlidesCol.length
    if (num > Lenght) {
        index = 1
    } else if (num < 1) {
        index = Lenght
    }

    for (let i = 0; i < Lenght; i++) {
        SlidesCol[i].style.display = "none"
    }
    SlidesCol[index - 1].style.display = "flex"
}