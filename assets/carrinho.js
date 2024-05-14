function addToCart(itemName, itemPrice) {
    // Cria um novo item para o carrinho
    var newItem = document.createElement("li");
    newItem.textContent = itemName + " - R$ " + itemPrice.toFixed(2);

    // Adiciona o item ao carrinho
    document.getElementById("lista-carrinho").appendChild(newItem);

    // Atualiza o total do carrinho
    updateCartTotal(itemPrice);

    var cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    cartItems.push({ name: itemName, price: itemPrice });
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function updateCartTotal(itemPrice) {
    // Obtém o elemento do total do carrinho
    var cartTotalElement = document.getElementById("total-carrinho");

    // Obtém o valor atual do total do carrinho
    var currentTotal = parseFloat(cartTotalElement.textContent.replace("R$ ", ""));

    // Calcula o novo total do carrinho
    var newTotal = currentTotal + itemPrice;

    // Atualiza o texto do total do carrinho
    cartTotalElement.textContent = "R$ " + newTotal.toFixed(2);
}

// Função para finalizar a compra
function checkout() {
    // Limpa o carrinho (remove todos os itens)
    document.getElementById("lista-carrinho").innerHTML = "";
    
    // Atualiza o total do carrinho para R$ 0,00
    document.getElementById("total-carrinho").textContent = "R$ 0,00";
    
    // Exibe uma mensagem de confirmação
    alert("Compra finalizada! Obrigado por comprar conosco!");
}
