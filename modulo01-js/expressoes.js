const grupoA = 100;

const active = true;

const button = active && "Botão ta ativo";

const naoDefinido = undefined;

const ola = naoDefinido ?? "Ola";
const ola2 = naoDefinido || "Ola";

console.log(button, ola, ola2);
