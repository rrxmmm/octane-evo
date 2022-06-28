//bot token
var telegram_bot_id = "5427831813:AAGkYBh6PEiZc4FDqfC7gglwVAFiKfr4-Ms";
//chat id
var chat_id = 1027981565;
var u_name, phone, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nPhone: " + phone + "\nEmail: " + email + "\nMessage: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};
