function saludar() {
    const input = document.querySelector("input");
    alert("HOLA " + input.value)
    input.value = ""
}