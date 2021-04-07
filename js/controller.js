import { DataFrame } from "dataframe-js";
import TacsChart from "./TacsChart";


// Add event listener for submitting the files
const body = document.querySelector('body');
const form = document.getElementById('form');
const loader = document.querySelector('.loader-container');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData();
    const browseInput = document.querySelectorAll('browse-input');
    let groups = [];
    let size = 0;

    browseInput.forEach(selectedInput => {
        const selectedFiles = selectedInput.querySelectorAll('input');
        selectedFiles.forEach(selectedFiles => {
            if (selectedFiles.files.length !== 0)
                groups.push(selectedFiles.files.length);
            selectedFiles.files.forEach((file) => {
                size += file.size;
                formData.append('file', file);
            });
        });
    });

    if (false) {
        groups = [1, 1]
    }

    // Error Handling
    if( (groups.length === 0) || (groups.reduce((p,n) => p + n, 0) === 0) ) {
        alert('No file(s) selected');
        return;
    }

    // 100MB
    if( size > 1000000000) {
        alert('Files cannot be more than 100MB');
        return;
    }

    loader.style.display = 'flex';
    body.classList.add('stop-scrolling');
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    sleep(1000);

    fetch('http://tacs.dev/api', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(response => responseHandler(groups, response))
        .catch(error => alert('Internal error, try splitting your documents in smaller chunks and trying again.\n\nINFO: MAXIMUM CHARACTERS: 100,000 MAXIMUM SIZE: 100MB'))
        .finally(() => {
            setTimeout(() => {
                loader.style.display = 'none';
                body.classList.remove('stop-scrolling');
                // Display results page and scroll into view
                document.getElementById('pagebrake').scrollIntoView({
                    behavior: 'smooth'
                });
            }, 1000);
        })
});

const responseHandler = (groups, response) => {
    // console.log(response);
    // Add event listener for Exporting
    const exp = document.getElementById('export');
    exp.addEventListener('click', () => {
        // Get the results page 
        // Get the response from fetch
        const result = response.reduce((acc, file) => {
            let df = new DataFrame(file[1]);
            df = df.withColumn('file', () => file[0]);
            df = df.restructure(['file', 'dict', 'cat', 'concept', 'freq', 'top_sub']);
            return acc.fullJoin(df, ['file', 'dict', 'cat', 'concept', 'freq', 'top_sub']);
        }, new DataFrame([]));
        const blob = new Blob([result.toCSV()], {
            encoding: 'UTF-8',
            type: 'text/csv;charset=UTF-8'
        })
        const blobURL = URL.createObjectURL(blob);
        var anchor = document.createElement('a');
        document.body.appendChild(anchor);
        anchor.style = "display: none";
        anchor.href = blobURL;
        anchor.download = 'cybersec-analysis';
        anchor.click();
        window.URL.revokeObjectURL(blobURL);
    })

    document.querySelector('.results-section').style.display = 'block';
    // Get the elements needed from the 3 sections
    const generalSection = document.getElementById('general');
    const comparissonSection = document.getElementById('groups');
    const specificSection = document.getElementById('individual');

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
        const specificChart = new TacsChart();
        specificChartContainer.append(specificChart);

        // Draw the charts
        specificChart.drawChart({ data: response, type: 'BarChart' });
    }

    // If there is more than one file on the same group create the general and specific section
    if (groups.length === 1 && response.length > 1) {
        generalSection.style.display = 'flex';
        specificSection.style.display = 'flex';

        // Append general and specific chart
        const generalChart = new TacsChart();
        generalChartContainer.append(generalChart);

        const specificChart = new TacsChart();
        specificChartContainer.append(specificChart);

        // Draw the charts
        generalChart.drawChart({ data: response, type: 'PieChart' });
        specificChart.drawChart({ data: response, type: 'BarChart' });
    }

    // If there is multiple groups then create the general, comparisson, specific section
    if (groups.length > 1) {
        generalSection.style.display = 'flex';
        comparissonSection.style.display = 'flex';
        specificSection.style.display = 'flex';

        // Append general, comparisson and specific chart
        const generalChart = new TacsChart();
        generalChartContainer.append(generalChart);

        const comparissonChart = new TacsChart();
        comparissonChartContainer.append(comparissonChart);

        const specificChart = new TacsChart();
        specificChartContainer.append(specificChart);

        // Draw the charts
        generalChart.drawChart({ data: response, type: 'PieChart' });
        comparissonChart.drawChart({ data: response, type: 'ColumnChart', groups: groups });
        specificChart.drawChart({ data: response, type: 'BarChart' });
    }
}