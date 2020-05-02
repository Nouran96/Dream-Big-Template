var message = document.getElementById("message"),
    value = 'Type your message here ...';
message.addEventListener("focus", function() {
        message.innerHTML = '';
    });
message.addEventListener("focusout", function() {
        message.innerHTML = value;
    });