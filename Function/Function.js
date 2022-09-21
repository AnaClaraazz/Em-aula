let n1,n2,resultado;
n1 = prompt("Digite um número: ");
n2 = prompt("Digite um segundo número: ");
function abacaxi(n1,n2){
    resultado = n1 + n2;
        return alert(resultado);
}
abacaxi(n1,n2);

do{
    opcao = mostrarmenu();
}while(opcao != 2)

function mostrarmenu(){
    entrada = "";
    alert("==-Mostrar o Menu-==" +
    "\n - Mostrar o menu"+
    "\n - Sair");
    return entrada = prompt();
}