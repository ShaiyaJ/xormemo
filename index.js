function cipher(raw, pass) {
    let xor = "";

    // Loop through each character of raw and XOR it with equivalent password character
    for (let i = 0; i < raw.length; i++) {
        const char = raw[i].charCodeAt();                   // Converting the characters to numbers at the same time to use in XOR operation
        const pchar = pass[i % pass.length].charCodeAt();

        xor = xor.concat(String.fromCharCode(char ^ pchar));
    }

    return xor;
}


// Document elements
const rawTextarea = document.getElementById("rawTextarea");
const encTextarea = document.getElementById("encTextarea");
const passwordArea = document.getElementById("passwordArea");

// Handling changes
rawTextarea.oninput = (_) => {
    const raw = rawTextarea.value;
    const pass = passwordArea.value;

    encTextarea.value = btoa(cipher(raw, pass));
}


encTextarea.oninput = (_) => {
    const enc = atob(encTextarea.value);
    const pass = passwordArea.value;

    rawTextarea.value = cipher(enc, pass);
}

passwordArea.oninput = (_) => {
    const raw = rawTextarea.value;
    const pass = passwordArea.value;

    encTextarea.value = btoa(cipher(raw, pass));
}