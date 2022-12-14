let showRegister = document.querySelector('.registercontent');

let showLogin = document.querySelector('.logincontent');

showRegister.setAttribute('id', 'exit');

const log_in = () => {
    localStorage.clear();
    let nickname = document.getElementById("nickname");
    let password = document.getElementById("password");
    let info = {
        Id: nickname.value,
        Pass: password.value
    };

    Infos = [];
    
    Infos.push(info);

    localStorage.setItem('Information', JSON.stringify(Infos));
    
    nickname.value = ``;
    password.value = ``;
}

const register = () => {
    localStorage.clear();
    let firstName = document.getElementById("fn");
    let surName = document.getElementById("sn");
    let phone = document.getElementById("pn");
    let newPass = document.getElementById("pw");
    let dateBirth = document.getElementById("db");
    let gender = document.getElementById("gender");

    let info1 = {
        Firstname: firstName.value,
        Surname: surName.value,
        Phone: phone.value,
        Pass: newPass.value,
        Birthday: dateBirth.value,
        Gender: gender.value
    };

    Infos1 = [];
    
    Infos1.push(info1);

    localStorage.setItem('Information1', JSON.stringify(Infos1));
    
    firstName.value = ``;
    surName.value = ``;
    phone.value = ``;
    newPass.value = ``;
    dateBirth.value = ``;
    gender.value = ``;
}

const backTologin = () => {
    showLogin.removeAttribute('id');
    showRegister.setAttribute('id', 'exit');
}

const toRegister = () => {
    showRegister.removeAttribute('id');
    showLogin.setAttribute('id', 'exit');

}