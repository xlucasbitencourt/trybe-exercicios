document.getElementById('container').style.backgroundColor = 'lightgrey';
document.getElementById("header-container").style.backgroundColor = 'green';
document.querySelector('.emergency-tasks').style.backgroundColor = 'pink';
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'darkorange';
for (let index = 0; index <= document.querySelectorAll(".emergency-tasks h3").length-1; index ++) {
    document.querySelectorAll(".emergency-tasks h3")[index].style.backgroundColor = 'darkviolet';
}
for (let index = 0; index <= document.querySelectorAll(".no-emergency-tasks h3").length-1; index ++) {
    document.querySelectorAll(".no-emergency-tasks h3")[index].style.backgroundColor = 'black';
}
//document.querySelectorAll(".emergency-tasks h3")[0].style.backgroundColor = 'black';
document.querySelector('#footer-container').style.backgroundColor = 'darkgreen';