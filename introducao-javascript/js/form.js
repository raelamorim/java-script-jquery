var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function() {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    // limpando as mensagens de erro
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    var erros = pacienteEhValido(paciente);
    
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(paciente);
    form.reset();
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaPacienteTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function montaPacienteTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(calculaImc(paciente.peso,paciente.altura),"info-imc"));
    
    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function pacienteEhValido(paciente) {
    var erros = [];
    
    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser branco");
    } 
    
    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco")
    } 
    
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco")
    } 
    
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco")
    } 
    
    if (!pesoEhValido(paciente.peso)) {
        erros.push("O peso é inválido");
    } 
    
    if (!alturaEhValida(paciente.altura)) {
        erros.push("A altura é inválida");
    } 

    return erros;
}

function pesoEhValido(peso) {
    return peso > 0 && peso < 200;
}

function alturaEhValida(altura) {
    return altura > 0 && altura < 2.5;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}