// Uses Google Charts along with other elements to create this custom element
export default class TACSChart extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="pie-chart"></div>
            <div class="minus-btn"></div>
        `
        this.style.position = 'relative';
        // Position minus button on top right
        const minusBtn = this.querySelector('.minus-btn');
        minusBtn.style.cssText = `
            position: absolute;
            top: 0;
            right: 0;
        `
    }

    connectedCallback() {
        // Load the Visualization API and the piechart package.
        google.load('visualization', '1.0', { 'packages': ['corechart'] });

        // Set a callback to run when the Google Visualization API is loaded.
        google.setOnLoadCallback(this.drawChart.bind(this));
    }

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    drawChart(data1, options1, type) {
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
        let chart = new google.visualization.PieChart(this.querySelector('.pie-chart'));
        chart.draw(data, options);
    }

}
customElements.define('tacs-chart', TACSChart);