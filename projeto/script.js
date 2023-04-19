//Como pusemos o script tag na head do html file, temos de garantir que o JavaScript code só é lido/interpretado após o carregamento total do DOM
document.addEventListener('DOMContentLoaded', () => {

    const loginBtn = document.querySelector('.login');
    const login = document.querySelector('.login-container');
    const closeBtns = Array.from(document.querySelectorAll('.close')); //NodeList(2) -> Array
    //Podia deixar estar em NodeList e tratá-la, na mesma, como se fosse um array, mas acho que faz mais sentido assim
    const signUpBtn = document.querySelector('.signUp');
    const signUp = document.querySelector('.signUp-container');

    loginBtn.addEventListener('click', () => {
        login.style.display = "flex";
    });

    signUpBtn.addEventListener('click', () => {
        signUp.style.display = "flex";
    });

    const closeLogin = closeBtns[0];
    const closeSignUp = closeBtns[1];

    closeLogin.addEventListener('click', () => {
        login.style.display = "none";
    });

    closeSignUp.addEventListener('click', () => {
        signUp.style.display = "none";
    });

});