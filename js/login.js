




let elForm = document.querySelector(".form")
let elInputPassword = document.querySelector(".input__password")
let elInputLogin = document.querySelector(".input__login")


elForm.addEventListener("submit" , (event) => {

    event.preventDefault()
    
    let inputPassValue = elInputPassword.value.trim()
    let inputLogValue = elInputLogin.value.trim()

    if(inputLogValue == "login" && inputPassValue == "password") {
        localStorage.setItem('token' , 'item')
        window.location.href = 'index.html'
    }else {
        console.log(false);
    }

    elInputLogin.value = null
    elInputPassword.value = null
})


