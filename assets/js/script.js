let nome = document.getElementById("nome")
let email = document.getElementById("email")
let assunto = document.getElementById("assunto")
let mapa = document.getElementById("mapa")
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome() {
    let txtNome = document.getElementById("txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.getElementById("txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.getElementById("txtAssunto")
    if (assunto.value.length >= 1) {
        if (assunto.value.length >= 280) {
            txtAssunto.innerHTML = "Limite máximo de 280 caracteres!"
            txtAssunto.style.color = "red"
        } else {
            txtAssunto.innerHTML = ""
            assuntoOk = true
        }
    } else {
        txtAssunto.innerHTML = "Por favor, preencha esse campo!"
        txtAssunto.style.color = "red"
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulario enviado com sucesso!")
    } else {
        alert("Preencha os campos corretamente antes de enviar!")
    }     
}

function mapaNormal() {
    mapa.style.width = "500px"
    mapa.style.height = "350px"
}

function mapaZoom() {
    mapa.style.width = "900px"
    mapa.style.height = "700px"
}