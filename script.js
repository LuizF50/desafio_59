/**
 * Função harmonicReorganizer
 * Recebe um array de strings representando notas musicais e as reorganiza em ordem alfabética.
 * @param {string[]} notasEspaciais - Array de notas musicais desordenadas.
 * @returns {string[]} - Array de notas musicais organizadas em ordem alfabética.
 */
function harmonicReorganizer(notasEspaciais) {
    // A função sort() organiza os elementos do array em ordem alfabética.
    return notasEspaciais.sort();
}

/**
 * Função harmonizeNotas
 * Simula o processo de harmonização das notas musicais recebidas dos planetas.
 * Utiliza a função harmonicReorganizer para ordenar as notas e exibe o resultado na página.
 */
function harmonizeNotas() {
    // Array de notas desordenadas enviadas por um planeta (exemplo: Mercúrio).
    const notasDesordenadas = ["Sol", "Dó", "Mi", "Ré", "Fá"];

    // Chama a função harmonicReorganizer para organizar as notas em ordem alfabética.
    const notasReorganizadas = harmonicReorganizer(notasDesordenadas);

    // Atualiza o elemento HTML com ID 'resultado' para exibir as notas reorganizadas.
    document.getElementById('resultado').innerText = `Notas Harmonizadas: ${notasReorganizadas.join(', ')}`;
}
