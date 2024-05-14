


    // Função para realizar o pagamento e gerar QR Code do Pix
    function realizarPagamento() {
        // Simulação de um pagamento bem-sucedido
        var total = parseFloat(document.getElementById("total-carrinho").textContent.replace("R$ ", ""));
        alert("Pagamento de R$" + total.toFixed(2) + " realizado com sucesso!");
        
        // Gera o QR Code do Pix com a chave ou link de pagamento
        var qrCodeData = "chave do Pix ou link de pagamento";
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            width: 200,
            height: 200
        });
        qrcode.makeCode(qrCodeData);
        
        // Limpa o carrinho após o pagamento
        limparCarrinho();
    }

    // Função para limpar o carrinho
    function limparCarrinho() {
        // Limpa a lista de itens do carrinho
        document.getElementById("lista-carrinho").innerHTML = "";
        
        // Atualiza o total do carrinho para R$ 0,00
        document.getElementById("total-carrinho").textContent = "R$ 0,00";
    }

