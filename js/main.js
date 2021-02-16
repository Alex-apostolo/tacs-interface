import particles from './particles.js';
import form from './form.js';
import TACSChart from './TACSChart.js';

window.onload = particles;
form(4);

const chart = new TACSChart();
chart.setAttribute('showminus', 'true');
document.getElementById('general-container').append(chart);

chart.draw(undefined, undefined, 'BarChart');