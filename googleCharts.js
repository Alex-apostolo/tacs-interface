const pie = document.getElementById('pie-chart-container');
const column = document.getElementById('column-chart');

const pieChart = document.createElement('div');
pieChart.setAttribute('id', 'pie-chart');
pieChart.classList.add('pie-chart');

const pieChart2 = document.createElement('div');
pieChart2.setAttribute('id', 'pie-chart2');
pieChart2.classList.add('pie-chart');

const pieChart3 = document.createElement('div');
pieChart3.setAttribute('id', 'pie-chart3');
pieChart3.classList.add('pie-chart');


pie.append(pieChart);
pie.append(pieChart2);
column.append(pieChart3);

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
    // Create the data table.
    let data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Topping');
    data2.addColumn('number', 'Slices');
    data2.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 15],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    let data3 = new google.visualization.DataTable();
    data3.addColumn('string', 'Year');
    data3.addColumn('number', 'Sales');
    data3.addColumn('number', 'Expenses');
    data3.addRows([
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 860, 580],
        ['2007', 1030, 540]
    ]);

    // Set chart options
    let options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': 400,
        'height': 300,
        'chartArea': { 'width': '100%', 'height': '80%' },
        'legend': { 'position': 'bottom' }
    };
    // Set chart options
    let options2 = {
        'title': 'How Much Pizza You Ate Last Night',
        'width': 400,
        'height': 300,
        'chartArea': { 'width': '100%', 'height': '80%' },
        'legend': { 'position': 'bottom' }
    };
    // Set chart options
    let options3 = {
        'title': 'Line chart',
        'width': 400,
        'height': 300,
        'chartArea': { 'width': '100%', 'height': '80%' },
        'legend': { 'position': 'bottom' }
    };

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.PieChart(pieChart);
    chart.draw(data, options);
    let chart2 = new google.visualization.PieChart(pieChart2);
    chart2.draw(data2, options2);
    let chart3 = new google.visualization.ColumnChart(pieChart3);
    chart3.draw(data3, options3);
}

