import particles from './particles.js';
import BrowseInput from './BrowseInput.js';
import TACSChart from './TACSChart.js';

window.onload = particles;

// Max browse-input elements we can have
const limit = 4;
// Add event listener for adding browse-input elements
const browseBtn = document.getElementById('add-btn-browse');
browseBtn.addEventListener('click', () => {
    if (BrowseInput.count !== limit) {
        const newBrowse = new BrowseInput();
        newBrowse.setAttribute('showminus', 'true');
        browseBtn.before(newBrowse);
        console.log(BrowseInput.count);
    }
})

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