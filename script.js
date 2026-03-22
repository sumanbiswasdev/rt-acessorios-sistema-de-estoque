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
        data: [10, 20, 15, 30, 25, 50, 60],
        borderColor: 'green',
        backgroundColor: 'green',
        tension: 0.4
      },
      {
        label: 'Estoque de saída',
        data: [5, 15, 10, 20, 18, 50, 60],
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