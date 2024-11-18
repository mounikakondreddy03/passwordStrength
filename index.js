let pswd = document.querySelector("input")
let msg = document.querySelector("p")

function check(a) {
    if(a.key === "Enter") {
        if(pswd.value.length < 4) {
            msg.textContent = "Weak Password";
            msg.style.color = "red"
        }
        else if(pswd.value.length >= 4 && pswd.value.length <= 10) {
            msg.textContent = "Medium Password";
            msg.style.color = "orange"
        }
        else {
            msg.textContent = "Strong Password";
            msg.style.color = "green"
        }
    }
}