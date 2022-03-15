let custo = 100;
let custoTotal;
let imposto;
let lucro;
let venda = 200;

if (custo<=0) {
    console.log('erro');
}
else {
imposto = custo*0.2;
custoTotal = custo + imposto;
lucro = venda - custoTotal;
console.log(lucro)
}