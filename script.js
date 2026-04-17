import { inject } from "@vercel/analytics"

inject()

const correctCode = "foidslayer911";

// Expose functions to global scope for onclick handlers
window.checkCode = function() {
    const input = document.getElementById("codeInput").value;

    if (input === correctCode) {
        document.getElementById("gameAccess").style.display = "block";
    } else {
        alert("Wrong code");
    }
}

window.openGame = function() {
    sessionStorage.setItem("access", "granted");
    window.location.href = "ultrakill/index.html";
}

window.openYandere = function() {
    sessionStorage.setItem("access", "granted");
    window.location.href = "yandere/index.html";
}