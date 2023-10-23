const dataAtual = new Date();

// Use os métodos do objeto Date para obter o ano, mês e dia
const ano = dataAtual.getFullYear();
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Adiciona um zero à esquerda, se necessário
const dia = String(dataAtual.getDate()).padStart(2, '0');

// Crie uma string formatada
export const dataFormatada = `${ano}-${mes}-${dia}T12:00:00Z`;
