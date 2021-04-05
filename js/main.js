import particles from './particles.js';
import BrowseInput from './BrowseInput.js';
import TacsChart from './TacsChart.js';
import './controller.js';

// document.querySelector('main').hidden = true;

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
    }
})

// Add event listener for general container
const generalBtn = document.getElementById('add-btn-general');
generalBtn.addEventListener('click', () => {
    const oldChart = document.querySelector('#general tacs-chart');
    var newChart = oldChart.cloneNode(true);
    newChart.setAttribute('showminus', 'true');
    document.querySelector('#general .chart-container').append(newChart);
    newChart.drawChart({'type': oldChart.type, 'level': oldChart.level, 'data': oldChart.data});
})

// Add event listener for comparisson container
const comparissonBtn = document.getElementById('add-btn-comparisson');
comparissonBtn.addEventListener('click', () => {
    const oldChart = document.querySelector('#groups tacs-chart');
    var newChart = oldChart.cloneNode(true);
    newChart.setAttribute('showminus', 'true');
    document.querySelector('#groups .chart-container').append(newChart);
    newChart.drawChart({'type': oldChart.type, 'level': oldChart.level, 'data': oldChart.data, 'groups': oldChart.groups});
})


