const form = document.querySelector('form')

const nome = document.querySelector('#name')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const confirmar = document.querySelector('#senha-confirmar')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    validaInput()
})

function validaInput() {
    const nameValue = nome.value
    const emailValue = email.value
    const senhaValue = senha.value
    const confirmarValue = confirmar.value

    if(nameValue === '') {
        setErrorFor(nome, 'O nome de usuário é obrigatório.')
    } else {
        setSuccesFor(nome)
    }

    if(emailValue === "" || !checkEmail(emailValue)) {
        setErrorFor(email, 'Por favor insira um E-mail valido')
    } else {
        setSuccesFor(email)
    }

    if(senhaValue === "" || senhaValue.length < 7) {
        setErrorFor(senha, 'A senha precisa ter no minimo 7 caracteres.')
    } else {
        setSuccesFor(senha)
    }

    if(confirmarValue === "" || confirmarValue !== senhaValue) {
        setErrorFor(confirmar, "As senhas não conferem.")
    } else {
        setSuccesFor(confirmar)
    }

    const formControls = document.querySelectorAll(".form-control")

    const formValido = [...formControls].every(formControl => {
        return (formControl.className === "form-control succes")
    })

    if(formValido) {
        console.log('Formulario esta valido')
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccesFor(input) {
    const formControl = input.parentElement

    formControl.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }