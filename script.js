function test(){
    const password = document.getElementById('password').value
    if(password == "NotSecret") {
        var secret = document.getElementById('Secret')
        var body = document.getElementById("bodyEl");
        body.style.animationPlayState = "running"
    }
}