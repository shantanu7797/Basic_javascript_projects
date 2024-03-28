let buttons = document.querySelectorAll(".btn")
let display = document.querySelector(".calc")
let val = document.querySelector(".value")
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = ""
let btnValue =""


Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        display.focus();
        btnValue = e.target.dataset.value
        if (btnValue === "=" && output !== "") {
           try {
            val.value = eval(output)
           } catch (error) {
            val.value = "Expression error"
            setTimeout(() => {
                val.value = ""
            }, 700);
           }
        }
        else {
            if (btnValue === "DEL") {
                output = output.toString().slice(0, -1)
            }
            else if (btnValue === "C") {
                output = "";
                val.value = ""
            }
            else {
                if (output === "" && specialChars.includes(btnValue)) return;
                output = output + e.target.dataset.value
            }
            display.value = output
        }
    })
})