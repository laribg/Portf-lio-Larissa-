function insere(){
    let codi = document.forms["cadastrar"]["codigo"].value;
    let data = document.forms["cadastrar"]["data"].value;
    let quant = document.forms["cadastrar"]["quantidade"].value;
    let desc = document.forms["cadastrar"]["descProd"].value;
    let marc = document.forms["cadastrar"]["marca"].value;
    let prate = document.forms["cadastrar"]["prat"].value;
    let radi = document.forms["cadastrar"]["radio"].value;

    let inserir = window.document.getElementById("inserirTabela");
    inserir.innerHTML = `<th scope="row">${codi}</th>`;
    inserir.innerHTML += `<td>${data}</td>`;
    inserir.innerHTML += `<td>${quant}</td>`;
    inserir.innerHTML += `<td>${desc}</td>`;
    inserir.innerHTML += `<td>${marc}</td>`;
    inserir.innerHTML += `<td>${prate}</td>`;
    inserir.innerHTML += `<td>${radi}</td>`;
}