const form = document.querySelector("form");
const username = document.querySelector("input[type=text]");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");
const age = document.querySelector("input[type=number]");
const hobbies = document.querySelector("#hobbies");
const gender = document.querySelector("#gender");
const country = document.querySelector("#country");

form.addEventListener("submit", (e) => {
    if (!username.value.trim()) {
        e.preventDefault();
        alert("İstifadəçi adı mütləq doldurulmalıdır!");
        return;
    }

    if (!email.value.trim() || !email.value.trim().includes("@")) {
        e.preventDefault();
        alert("Düzgün email ünvanı daxil edin!");
        return;
    }

    if (!password.value.trim() || password.value.length < 6) {
        e.preventDefault();
        alert("Şifrə ən azı 6 simvoldan ibarət olmalıdır!");
        return;
    }

    if (!age.value.trim() || Number(age.value.trim()) < 18) {
        e.preventDefault();
        alert("Yaş mütləq qeyd olunmalı və 18-dən kiçik olmamalıdır!");
        return;
    }

    if (!hobbies.value.trim()) {
        e.preventDefault();
        alert("Hobbilər xanası mütləq doldurulmalıdır!");
        return;
    }

    if (!gender.value.trim()) {
        e.preventDefault();
        alert("Cinsiyyət xanası mütləq doldurulmalıdır!");
        return;
    }

    if (!country.value.trim()) {
        e.preventDefault();
        alert("Ölkə xanası mütləq doldurulmalıdır!");
        return;
    }

    
    const obj = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        hobbies: hobbies.value.trim(),
        gender: gender.value.trim(),
        country: country.value.trim()
    };
    
    console.log(obj);
});