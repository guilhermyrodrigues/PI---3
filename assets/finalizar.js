// Função para finalizar a compra
function checkout() {
    // Limpa o carrinho (remove todos os itens)
    document.getElementById("lista-carrinho").innerHTML = "";
    
    // Atualiza o total do carrinho para R$ 0,00
    document.getElementById("total-carrinho").textContent = "R$ 0,00";
    
}
