'use strict';
/******************************************************/
// code test:
// localStorage.setItem('name', 'Bushra');
// localStorage.setItem('age', '23');
// console.log(localStorage.getItem('age'));
// console.log('key 0: ' + localStorage.key(0));
// console.log('key 1: ' + localStorage.key(1));
/******************************************************/
//-------------------------------------------------------------------
// code 1:
// var inputKey = document.getElementById('inputKey');
// var inputValue = document.getElementById('inputValue');
// var insertButton = document.getElementById('insertBtn');
// var form = document.getElementById('form');
// form.addEventListener('submit', getInputData);
// function getInputData(event){
//   console.log('working');
//   event.preventDefault();
//   var key = event.target.inputKey.value;
//   var keyValue = event.target.inputValue.value;
//   console.log('working');
//   console.log('key: ' + key);
//   console.log('value: ' + keyValue);
// }
//-----------------------------------------------------------------------
var inputKey = document.getElementById('inputKey');
var inputValue = document.getElementById('inputValue');
var insertButton = document.getElementById('insertBtn');
var outputList = document.getElementById('outputList');
insertButton.addEventListener('click', getInputData);
function getInputData(event){
  event.preventDefault;
  var key = inputKey.value;
  var keyValue = inputValue.value;
  if (key && keyValue){
    localStorage.setItem(key, keyValue);
    location.reload();
  }
}
for (var i = 0; i < localStorage.length; i++){
  var outputKey = localStorage.key(i);
  var outputValue = localStorage.getItem(outputKey);
  outputList.innerHTML += `${outputKey}: ${outputValue}<br />`;
//   var liEl = document.createElement('li');
//   liEl.textContent = `${key}: ${value}`;
//   outputList.appendChild(liEl);
}

