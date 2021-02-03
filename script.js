function test(){
    const password = document.getElementById('password').value
    if(password == "NotSecret") {
        var secret = document.getElementById('Secret')
        secret.innerHTML = "Welcome to secret area"
    }
}