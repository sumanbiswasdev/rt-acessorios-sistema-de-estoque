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

// PASSO 1: Obtenha o botão (o elemento em que você clica)
const dropdownBtn = document.getElementById("dropdownBtn")

// PASSO 2: Obtenha o menu suspenso (a lista oculta)
const dropdownMenu = document.getElementById("dropdownMenu")

// PASSO 3: Ao clicar no botão, mostre ou oculte o menu
dropdownBtn.addEventListener('click', function () {
  dropdownMenu.classList.toggle("hidden")
})

dropdownMenu.addEventListener('click', function(event){
  if(!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)){
  dropdownMenu.classList.add("hidden")
    
  }
})

const options = dropdownMenu.querySelectorAll("li");

options.forEach(function(option) {
  option.addEventListener("click", function() {
    // Change button text to the option selected
    dropdownBtn.textContent = option.textContent;

    // Hide dropdown after selecting
    dropdownMenu.classList.add("hidden");
  });
});