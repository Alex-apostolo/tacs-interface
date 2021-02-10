const pie = document.getElementById('pie-chart');
const column = document.getElementById('column-chart');

const chart_div = document.createElement('div');
chart_div.setAttribute('id', 'chart_div');

const chart_div2 = document.createElement('div');
chart_div2.setAttribute('id', 'chart_div2');

const chart_div3 = document.createElement('div');
chart_div3.setAttribute('id', 'chart_div3');


pie.append(chart_div);
pie.append(chart_div2);
column.append(chart_div3);

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
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
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Topping');
    data2.addColumn('number', 'Slices');
    data2.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 15],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    var data3 = new google.visualization.DataTable();
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
    var options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': 400,
        'height': 300,
        'chartArea': { 'width': '100%', 'height': '80%' },
        'legend': { 'position': 'bottom' }
    };
    // Set chart options
    var options2 = {
        'title': 'How Much Pizza You Ate Last Night',
        'width': 400,
        'height': 300,
        'chartArea': { 'width': '100%', 'height': '80%' },
        'legend': { 'position': 'bottom' }
    };
    // Set chart options
    var options3 = {
        'title': 'Line chart',
        'width': 400,
        'height': 300,
        'chartArea': { 'width': '100%', 'height': '80%' },
        'legend': { 'position': 'bottom' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
    chart2.draw(data2, options2);
    var chart3 = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
    chart3.draw(data3, options3);
}

