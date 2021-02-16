import particles from './particles.js';
import form from './form.js';
import TACSChart from './TACSChart.js';

window.onload = particles;
form(4);

// Add Bar Chart
const chart = new TACSChart();
chart.setAttribute('showminus', 'true');
document.getElementById('general-container').append(chart);

chart.draw(undefined, undefined, 'BarChart');

// Add event listener for general container
const generalBtn = document.getElementById('add-btn-general');
generalBtn.addEventListener('click', () => {
    const newChart = new TACSChart();
    newChart.setAttribute('showminus', 'true');
    document.getElementById('general-container').append(newChart);
})

// Add event listener for comparisson container
const comparissonBtn = document.getElementById('add-btn-comparisson');
comparissonBtn.addEventListener('click', () => {
    const newChart = new TACSChart();
    newChart.setAttribute('showminus', 'true');
    document.getElementById('comparisson-container').append(newChart);
})