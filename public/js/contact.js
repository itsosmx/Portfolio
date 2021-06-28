
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