const form = document.querySelector("#registrationForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const age = document.querySelector("#age");
const country = document.querySelector("#country");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

   
    if (!username.value.trim()) {
        alert("İstifadəçi adı mütləq doldurulmalıdır!");
        username.focus();
        return;
    }

   
    if (!email.value.trim() || !email.value.includes("@")) {
        alert("Düzgün email ünvanı daxil edin!");
        email.focus();
        return;
    }

    if (password.value.trim().length < 6) {
        alert("Şifrə ən azı 6 simvoldan ibarət olmalıdır!");
        password.focus();
        return;
    }

   
    const ageValue = Number(age.value.trim());
    if (!age.value.trim() || ageValue < 18) {
        alert("Yaş mütləq qeyd olunmalı və 18-dən kiçik olmamalıdır!");
        age.focus();
        return;
    }

    
    const selectedGender = document.querySelector("input[name='gender']:checked");
    if (!selectedGender) {
        alert("Cinsiyyət mütləq seçilməlidir (Qadın və ya Kişi)!");
        return;
    }

    
    const selectedHobbies = Array.from(document.querySelectorAll("input[name='hobbies']:checked"))
                                 .map(el => el.value);
    if (selectedHobbies.length === 0) {
        alert("Ən azı bir hobbi seçilməlidir!");
        return;
    }

    
    if (!country.value.trim()) {
        alert("Ölkə xanası mütləq doldurulmalıdır!");
        country.focus();
        return;
    }

   
    const userData = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        age: ageValue,
        gender: selectedGender.value,
        hobbies: selectedHobbies,
        country: country.value.trim()
    };

    console.log("Qeydiyyat uğurla tamamlandı:", userData);
});