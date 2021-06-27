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



// Form




$("form").on(('submit'), (e) => {
    e.preventDefault();
    const email = $('#email').val().trim();
    const name = $('#name').val().trim();
    const message = $('#message').val().trim();

    const Data = {
        name,
        email,
        message
    }
    $.post('/SendEmail', Data, () => {
        console.log("Done...")
    })

})

var OnSubMessage = document.getElementById("onsubmit")
var FormID = document.getElementById("SendEmail")

FormID.addEventListener("submit", () => {
    OnSubMessage.textContent = "Message Sent."
    OnSubMessage.classList.add('go')
    OnSubMessage.style.padding = "1rem"
    OnSubMessage.classList.remove('display')
    FormID.reset();

    setTimeout(() => {
        OnSubMessage.classList.remove('go')
        OnSubMessage.classList.add('display')
    }, 2000)
})


