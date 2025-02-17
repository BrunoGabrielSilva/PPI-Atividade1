document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos que possuem a classe 'quantidade'
    const quantidadeInputs = document.querySelectorAll('.quantidade');
    quantidadeInputs.forEach(input => {
        input.addEventListener('input', calcularValorTotal);
    });

    // Função para calcular o valor total
    function calcularValorTotal() {
        // Seleciona todos os elementos com a classe 'pacote'
        const pacotes = document.querySelectorAll('.pacote');
        pacotes.forEach(pacote => {
            const quantidade = pacote.querySelector('.quantidade').value;
            const preco = pacote.querySelector('.preco').dataset.valor;
            const total = quantidade * preco;
            pacote.querySelector('.total').innerText = `Valor Total: R$ ${total.toFixed(2)}`;
        });
    }
});
