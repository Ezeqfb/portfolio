document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typed-text");
    const textToType = "&lt;/EzeBernal&gt;";

    // Escritura progresiva
    function typeText() {
        let currentText = "";
        let i = 0;
        const typingInterval = setInterval(function () {
            currentText += textToType[i];
            textElement.innerHTML = currentText;
            i++;

            if (i === textToType.length) {
                clearInterval(typingInterval);
            }
        }, 140); // velocidad de escritura
    }

    // cantidad de delay
    setTimeout(typeText, 0);
});
