function test(){
    const password = document.getElementById('password').value;
    if(password == "NotSecret") {
        sessionStorage.setItem("Auth", "Auth")
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
if (sessionStorage.getItem("Auth") === "Auth") {
console.log("Authed!")
}