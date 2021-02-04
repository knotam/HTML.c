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
function themeSetter(){
    const themeSetterText = document.getElementById("ThemeSetter1").value;
    const themeController = document.getElementById("themeController");
    if(themeSetterText =="colTheme") {
        themeController.href = "./assets/theme1.css";
    }
    if(themeSetterText =="colTheme1") {
        themeController.href = "./assets/style.css";
    }
}