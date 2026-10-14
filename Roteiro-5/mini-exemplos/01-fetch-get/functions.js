// 1. Função assíncrona dedicada com nome claro
async function carregarServicos(listaServicos) {
    try {
        // Passo 1.1: Dispara a requisição HTTP assíncrona para o arquivo
        const resposta = await fetch('dados.json');
        // Passo 1.2: Converte a resposta em formato JSON para um vetor JavaScript
        const servicos = await resposta.json();
        // Passo 1.3: Limpa a lista antes de adicionar novos elementos
        listaServicos.innerHTML = '';
        // Passo 1.4: Percorre a lista e cria os elementos no DOM
        for (const servico of servicos) {
            const item = document.createElement('li');
            item.className = 'list-group-item d-flex justify-content-between align-items-center';
            item.innerHTML = `
            
                        <span>${servico.nome}</span>
                        <span class="badge bg-success rounded-pill">R$ ${servico.preco.toFixed(2)}</span>
`;
            listaServicos.appendChild(item);
        }
    } catch (erro) {
        console.error('Falha ao carregar os dados do arquivo:', erro);
    }
}
// 2. Controle do ciclo de vida: executa quando o DOM estiver completamente pronto
document.addEventListener('DOMContentLoaded', () => {
    const btnCarregar = document.getElementById('btnCarregar');
    const listaServicos = document.getElementById('listaServicos');
    btnCarregar.addEventListener('click', () => carregarServicos(listaServicos));
});