const ctx = document.getElementById('inventoryChart');

new Chart(ctx, {
  type: 'bar', // line chart (best for date-wise data)

  data: {
    labels: [
      'Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5'
    ], // dates

    datasets: [
      {
        label: 'Estoque de entrada',
        data: [10, 20, 15, 30, 25],
        borderColor: 'green',
        backgroundColor: 'green',
        tension: 0.4
      },
      {
        label: 'Estoque de saída',
        data: [5, 15, 10, 20, 18],
        borderColor: 'red',
        backgroundColor: 'red',
        tension: 0.4
      }
    ]
  },

  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});

// Catagoria de produtos

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
  if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add("hidden");
  }
});

const options = dropdownMenu.querySelectorAll("li");

options.forEach(function(option) {
  option.addEventListener("click", function() {

    dropdownBtn.textContent = option.textContent;

    dropdownMenu.classList.add("hidden");
  });
});

// fornecedor

const fornecedorBtn = document.getElementById("fornecedorBtn")
const listadeFornecedor = document.getElementById("listadeFornecedor")

fornecedorBtn.addEventListener("click", function (){
  listadeFornecedor.classList.toggle("hidden")
})


document.addEventListener('click', function (event1){
  if(!fornecedorBtn.contains(event1.target) && !listadeFornecedor.contains(event1.target)){
    listadeFornecedor.classList.add("hidden")
  }
})


const nomesdoFornecedor = listadeFornecedor.querySelectorAll("li")
nomesdoFornecedor.forEach(function(fornecedor){
  fornecedor.addEventListener('click', function(){
    fornecedorBtn.textContent = fornecedor.textContent
    listadeFornecedor.classList.add("hidden")
  })
})

// Estoque mínimo

let inputBox = document.getElementById("minStock");
let btnUp = document.getElementById("btnUp");
let btnDown = document.getElementById("btnDown");

btnUp.addEventListener("click", function () {

    let currentValue = Number(inputBox.value);

    currentValue = currentValue + 1;

    inputBox.value = currentValue;
});


btnDown.addEventListener("click", function () {

    let currentValue = Number(inputBox.value);

    if (currentValue > 0) {
        currentValue = currentValue - 1;
    }

    inputBox.value = currentValue;
});

// Estoque Atual

let estoueInput = document.getElementById("estoueInput");
let estoueUp = document.getElementById("estoueUp");
let estoueDown = document.getElementById("estoueDown");

estoueUp.addEventListener("click", function () {

    let currentValue = Number(estoueInput.value);

    currentValue = currentValue + 1;

    estoueInput.value = currentValue;
});


estoueDown.addEventListener("click", function () {

    let currentValue = Number(estoueInput.value);

    if (currentValue > 0) {
        currentValue = currentValue - 1;
    }

    estoueInput.value = currentValue;
});

// Preço Unitários

let unitariosInput = document.getElementById("unitariosInput")
let unitariosUp = document.getElementById("unitariosUp")
let unitariosDown = document.getElementById("unitariosDown")

unitariosUp.addEventListener('click', function() {
  let currentValue = Number(unitariosInput.value)
  currentValue = currentValue + 1
  unitariosInput.value = currentValue
})


unitariosDown.addEventListener('click', function() {
  let currentValue = Number(unitariosInput.value)
  if(currentValue > 0 ){
    currentValue = currentValue - 1

  }
  unitariosInput.value = currentValue
})



// ========================================================================================================================


