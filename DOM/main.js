var headOne = document.querySelector("#one")
var headTwo = document.querySelector("#two")
var headThree = document.querySelector("#three")

headOne.addEventListener("mouseover", function(){
  headOne.textContent="Mouse is over this";
  headOne.style.color = 'red';
})

headOne.addEventListener("mouseout",function(){
  headOne.textContent = "Hover over me";
  headOne.style.color = 'black';
})

headTwo.addEventListener('click', function(){
  headTwo.textContent = "You clicked it"
  headTwo.style.color = 'blue';
})

headTwo.addEventListener('dblclick', function(){
  headTwo.textContent = "You double clicked it"
  headTwo.style.color = 'green';
})
