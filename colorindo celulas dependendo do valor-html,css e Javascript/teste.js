
const tabela = document.querySelector("table");

tabela.addEventListener("DOMSubtreeModified", () => {
    const linhas = tabela.querySelectorAll("tr");
    for (const linha of linhas) {
        const celulas = linha.querySelectorAll("td");
        for (const celula of celulas){
            const valor = parseFloat(celula.texContent);
            if (valor < 75 ) {
                celula.style.backgroundColor = "red";
            } else if (valor > 90) {
                celula.style.backgroundColor = "green";
            } else {
                celula.style.backgroundColor = "yellow";
            }
        }

    }
});