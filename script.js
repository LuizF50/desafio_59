function harmonicReorganizer(notasEspaciais) {
    return notasEspaciais.sort();
}

function harmonizeNotas() {
    const notasDesordenadas = ["Sol", "Dó", "Mi", "Ré", "Fá"];
    const notasReorganizadas = harmonicReorganizer(notasDesordenadas);
    document.getElementById('resultado').innerText = `Notas Harmonizadas: ${notasReorganizadas.join(', ')}`;
}
