function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $("#seu-nome").val();
    var numPalavras = $("#contador-palavras").text();
    var botaoRemover = "<a href='#' vclass=\"botao-remover\"><i class='small material-icons'>delete</i></a>" ;

    var linha = novaLinha(usuario,numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    // Icone dentro do <a>
    link.append(icone);

    // <a> dentro do <td>
    colunaRemover.append(link);

    // Os três <td> dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
}