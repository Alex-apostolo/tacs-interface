import particles from './particles.js';
import form from './form.js';
import TACSChart from './TACSChart.js';

window.onload = particles;
form(4);

const chart2 = new TACSChart();
document.getElementById('general-container').append(chart2);