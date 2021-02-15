const generalContainer = document.getElementById('general-container');
const comparissonContainer = document.getElementById('comparisson-container');

// Create container
const pieContainer = document.createElement('div');
pieContainer.classList.add('pie-container');
// Create pie chart
const pieChart = document.createElement('div');
pieChart.id = 'pie-chart0';
pieChart.classList.add('pie-chart');
// Create minus button
const minusBtn = document.createElement('div');
minusBtn.classList.add('minus-btn');
// Append to container
pieContainer.append(pieChart);
pieContainer.append(minusBtn);

//Append to general container
generalContainer.append(pieContainer);

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    // Set chart options
    let options = {
        width: 400,
        height: 300,
        backgroundColor: '#1f2761',
        chartArea: { width: '100%', height: '80%' },
        legend: {
            position: 'bottom',
            textStyle: {
                color: 'whitesmoke',
                fontName: 'EB Garamond'
            }
        },
        hAxis: {
            textStyle: {
                color: 'whitesmoke',
                fontName: 'EB Garamond',
                fontSize: 13
            }
        },
        titleTextStyle: {
            color: 'whitesmoke',
            fontName: 'EB Garamond',
            fontSize: 20
        }
    };
    options.title = 'Hello';

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.PieChart(pieChart);
    chart.draw(data, options);
}

