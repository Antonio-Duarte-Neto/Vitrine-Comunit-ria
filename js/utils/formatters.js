export function formatarMoeda(valor) {
    const num = parseFloat(valor) || 0;
    return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
export function formatarTelefone(fone) {
    const digits = (fone || '').replace(/\D/g, '');//Remove qualquer caractere que não seja numero
    if (digits.length === 11) {     //formata o numero com base na quantidade de digitos
        return digits.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // 
    }
    return fone;
}
export function escapeHtml(texto) {
    const div = document.createElement('div'); //Cria um elemento temporario para escapar caracteres especiais
    div.textContent = texto; // Define o texto como conteudo do elemento
    return div.innerHTML; //Retorna o conteudo HTML escapado
}