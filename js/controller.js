import TacsChart from "./TacsChart";

const backend = 'http://127.0.0.1:5000'

// Add event listener for submitting the files
const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData();
    const browseInput = document.querySelectorAll('browse-input');
    const groups = [];

    browseInput.forEach(selectedInput => {
        const selectedFiles = selectedInput.querySelectorAll('input');
        selectedFiles.forEach(selectedFiles => {
            if (selectedFiles.files.length !== 0)
                groups.push(selectedFiles.files.length);
            for (let i = 0; i < selectedFiles.files.length; i++) {
                // Add additional data to file to indicate that its in a specific group
                formData.append('file', selectedFiles.files[i]);
            }
        });
    });

    fetch(backend + '/tacs', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(response => responseHandler(groups, response));
});

const responseHandler = (groups, response) => {
    // Display results page and scroll into view
    document.querySelector('main').style.display = 'block';
    document.getElementById('pagebrake').scrollIntoView({
        behavior: 'smooth'
    });

    // Get the elements needed from the 3 sections
    const generalSection = document.getElementById('general-section');
    const comparissonSection = document.getElementById('comparisson-section');
    const specificSection = document.getElementById('specific-section');

    const generalChartContainer = generalSection.querySelector('.chart-container');
    const comparissonChartContainer = comparissonSection.querySelector('.chart-container');
    const specificChartContainer = specificSection.querySelector('.chart-container');

    // Reset the 3 sections and hide them
    generalChartContainer.innerHTML = "";
    comparissonChartContainer.innerHTML = "";
    specificChartContainer.innerHTML = "";

    generalSection.style.display = 'none';
    comparissonSection.style.display = 'none';
    specificSection.style.display = 'none';

    // If there is one file then display only the specific section
    if (response.length === 1) {
        specificSection.style.display = 'flex';

        // Append specific chart
        const specificChart = new TacsChart(response);
        specificChart.setAttribute('type', 'BarChart');
        specificChartContainer.append(specificChart);

        // Draw the charts
        specificChart.drawChart({ data: specificChart.data });
    }

    // If there is more than one file on the same group create the general and specific section
    if (groups.length === 1 && response.length > 1) {
        generalSection.style.display = 'flex';
        specificSection.style.display = 'flex';

        // Append general and specific chart
        const generalChart = new TacsChart(response);
        generalChartContainer.append(generalChart);

        const specificChart = new TacsChart(response);
        specificChart.setAttribute('type', 'BarChart');
        specificChartContainer.append(specificChart);

        // Draw the charts
        generalChart.drawChart({ data: generalChart.data });
        specificChart.drawChart({ data: specificChart.data });
    }

    // If there is multiple groups then create the general, comparisson, specific section
    if (groups.length > 1) {
        generalSection.style.display = 'flex';
        comparissonSection.style.display = 'flex';
        specificSection.style.display = 'flex';

        // Append general, comparisson and specific chart
        const generalChart = new TacsChart(response);
        generalChartContainer.append(generalChart);

        const comparissonChart = new TacsChart(response);
        comparissonChart.setAttribute('type', 'ColumnChart');
        comparissonChartContainer.append(comparissonChart);

        const specificChart = new TacsChart(response);
        specificChart.setAttribute('type', 'BarChart');
        specificChartContainer.append(specificChart);

        // Draw the charts
        generalChart.drawChart({ data: generalChart.data });
        comparissonChart.drawChart({ data: comparissonChart.data });
        specificChart.drawChart({ data: specificChart.data });
    }
}