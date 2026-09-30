// Obtém os serviços do localstorage
const STORAGE_KEY = 'garopaba_vitrine_servicos';
// Retorna os serviços como array de objetos, ou um array vazio se não houver dados
export function obterServicos() {
    const dados = localStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
}

// Função para salvar os serviços
export function salvarServico(novoServico) {
    const servicos = obterServicos(); // Obtém os serviços existentes
    const servicoCompleto = { // Cria um novo objetode serviço com um ID único e a data de cadastro
        id: Date.now().toString(),
        dataCadastro: new Date().toISOString(),//Adiciona a data de cadastro no formato ISO
        ...novoServico
    };
    servicos.push(servicoCompleto);// Adiciona o novo serviço ao inicio do array de serviço
    localStorage.setItem(STORAGE_KEY, JSON.stringify(servicos)); // salva os serviços atualizados no Localstorage
    return servicoCompleto;
}

// Função para atualizar serviços
export function atualizarServiço(id, dados) {
    const servicos = obterServicos(); // Obtem os serviços existentes
    const index = servicos.findIndex(s => s.id === id); //se o serviço for encontrado, atualiza os dados e salva no LocalStorage
    if (index !== -1) {
        servicos[index] = {
            ...servicos[index],
            ...dados,
            dataEdicao: new Date().toISOString()
        };
        localStorage.setItem(STORAGE_KEY,
            JSON.stringify(servicos));
        return servicos[index];
    }
    return null;
}

// Função para remover serviços
export function removerServico(id) {
    const servicos = obterServicos();//Obtem os serviços existentes
    const filtrados = servicos.filter(s => s.id !== id); // Filtra os serviços removendo o serviço com o ID fornecido
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtrados)); // Salva os seviços atualizados no local localStorage
    return filtrados;
}