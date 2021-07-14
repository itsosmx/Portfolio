

$("#SendEmail").on(('submit'), (e) => {
    e.preventDefault();
    let id = document.getElementById("SendEmail")
    var formData = new FormData(id);
    formData.append('service_id', 'service_d3itspw');
    formData.append('template_id', 'template_cmxytmp');
    formData.append('user_id', 'user_9NXJK1vjN75yc1MBmMfng');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function () {
        sendMessge("Email Sent.")
    }).fail(function (error) {
        sendMessge("Email failed to sent")
    });
    id.reset();
});


function sendMessge(content) {
    var OnSubMessage = document.getElementById("onsubmit")
    OnSubMessage.textContent = content
    OnSubMessage.classList.add('go')
    OnSubMessage.style.padding = "1rem"
    OnSubMessage.classList.remove('display')
    setTimeout(() => {
        OnSubMessage.classList.remove('go')
        setTimeout(() => {
            OnSubMessage.classList.add('display')
        }, 900)
    }, 2000)
}
// var OnSubMessage = document.getElementById("onsubmit")
// var FormID = document.getElementById("SendEmail")

// FormID.addEventListener("submit", () => {
//     OnSubMessage.textContent = "Message Sent."
//     OnSubMessage.classList.add('go')
//     OnSubMessage.style.padding = "1rem"
//     OnSubMessage.classList.remove('display')
//     FormID.reset();

//     setTimeout(() => {
//         OnSubMessage.classList.remove('go')
//         OnSubMessage.classList.add('display')
//     }, 2000)
// })