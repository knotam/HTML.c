function test(){
    const password = document.getElementById('password').value;
    if(password == "NotSecret") {
        var secret = document.getElementById('Secret');
        var body = document.getElementById("bodyEl");
        body.style.background="none";
        body.style.animationPlayState = "running";
    }
    else{
        var incorrectPas = document.getElementById("incPass");
        incorrectPas.innerText = "Incorrect Password."

    }
}