let display = document.getElementById("display");
let historyList = document.getElementById("history");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);

        // Add to history
        let li = document.createElement("li");
        li.innerText = display.value + " = " + result;
        historyList.appendChild(li);

        display.value = result;
    } catch {
        alert("Invalid Expression");
    }
}
