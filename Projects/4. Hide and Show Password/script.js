let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let tooltip = document.querySelector(".tooltip");
let strength = document.getElementById("strength");

eyeicon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "images/eye-open.png";
        tooltip.textContent = "Hide";
    } else {
        password.type = "password";
        eyeicon.src = "images/eye-close.png";
        tooltip.textContent = "Show";
    }
};

// Also toggle with Enter key
password.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        eyeicon.click();
    }
});

// Password strength checker
password.addEventListener("input", function () {
    let val = password.value;
    let strengthValue = "Weak";

    if (val.length >= 6 && /[0-9]/.test(val)) {
        strengthValue = "Medium";
    }
    if (val.length >= 8 && /[0-9]/.test(val) && /[A-Z]/.test(val) && /[^A-Za-z0-9]/.test(val)) {
        strengthValue = "Strong";
    }

    strength.textContent = "Strength: " + strengthValue;
    strength.style.color = strengthValue === "Weak" ? "red" : strengthValue === "Medium" ? "orange" : "green";
});
