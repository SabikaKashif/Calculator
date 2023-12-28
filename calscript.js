function pushToDisplay(value) {
    document.forms[0].display.value += value;
}
function clearDisplay() {
    document.forms[0].display.value = '';
}
function calculateOperation(values, operation) {
    if (values.length < 2) {
        return "NONE";
    }

    let result = parseFloat(values[0]);
    for (let i = 1; i < values.length - 1; i += 2) {
        const nextValue = parseFloat(values[i + 1]);
        if (isNaN(nextValue)) {
            return "NONE";
        }

        if (values[i] === "+") {
            result += nextValue;
        } else if (values[i] === "-") {
            result -= nextValue;
        } else if (values[i] === "x") {
            result *= nextValue;
        } else if (values[i] === "÷" && nextValue !== 0) {
            result /= nextValue;
        } else {
            return "NONE";
        }
    }
    return result;
}


function backspace() {
    var currentValue = document.forms[0].display.value;
    document.forms[0].display.value = currentValue.slice(0, -1);
}

function setOperation(operation) {
    var currentValue = document.forms[0].display.value;
    if (currentValue !== '') {
        document.forms[0].display.value += ' ' + operation + ' ';
    }
}

function calculateResult() {
    const expression = document.forms[0].display.value;
    const values = expression.split(' ');
    const result = calculateOperation(values, values[values.length - 1]);
    document.forms[0].display.value = result;
}