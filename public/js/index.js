console.clear();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

fetch("./public/html/Skills.html").then(res => {
    return res.text()
}).then(date => {
    document.getElementById("Skills").innerHTML = date
})


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

var Timer
var ProjectContaniner = document.getElementById("Projects")

ProjectContaniner.onmouseover = () => {
    if (Timer) {
        clearInterval(Timer)
    }
}
ProjectContaniner.onmouseleave = () => {
    Timer = AutoSlide(index)
}

function NextSlide(n) {
    SlideShow(index += n)
}

function AutoSlide(n) {
    return setInterval(() => {
        SlideShow(index += n)
    }, 1000 * 10)
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