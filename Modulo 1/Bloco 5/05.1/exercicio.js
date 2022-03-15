document.getElementsByTagName('p')[0].innerText = 'Exercicio 1';
document.getElementsByClassName('main-content')[0].style.background = 'rgb(76,164,109)';
document.getElementsByClassName('center-content')[0].style.background = 'white';
document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScripit';
for (let index = 0; index <= document.getElementsByTagName('p').length -1; index++) {
    document.getElementsByTagName('p')[index].innerHTML = document.getElementsByTagName('p')[index].innerHTML.toUpperCase();
}
for (let index = 0; index <= document.getElementsByTagName('p').length -1; index++) {
    console.log(document.getElementsByTagName('p')[index].innerHTML);
}
