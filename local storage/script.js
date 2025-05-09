let user = document.querySelector("#user")
let btn = document.querySelector("#btn")
let welcome = document.querySelector("#welcome")

/* 1 - Salvar LocalStorage */
/* localStorage.setItem("username", "Jhuan") */

/* 2 - Pegar item LocalStorage */
/* let username = localStorage.getItem("username") */


function pegarnome() {
    localStorage.setItem("username", user.value)
    let username = localStorage.getItem("username")

    welcome.innerHTML = `Olá ${username}, Seja Bem-Vindo!`

}

function pegarValorLocal() {
    let username = localStorage.getItem("username")

    if(username == null) {
        welcome.innerHTML = "Faça seu login"
    }else {
        welcome.innerHTML = `Olá ${username} , Seja bem vindo!`
    }

    welcome.innerHTML = `Olá ${username}, Seja Bem-Vindo!`

}
pegarValorLocal()

btn.addEventListener("click", pegarnome)