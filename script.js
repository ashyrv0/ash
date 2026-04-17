const correctCode = "foidslayer911";

function checkCode() {
    const input = document.getElementById("codeInput").value;

    if (input === correctCode) {
        document.getElementById("gameAccess").style.display = "block";
    } else {
        alert("Wrong code");
    }
}

document.getElementById("submitBtn").addEventListener("click", checkCode);
