var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdIMC = paciente.querySelector(".info-imc");
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    if (!pesoEhValido(peso)) {
        tdIMC.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    } else if (!alturaEhValida(altura)) {
        tdIMC.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    } else {
        tdIMC.textContent = calculaImc(peso, altura);
    }
    
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = (peso / (altura * altura));
    return imc.toFixed(2);
}