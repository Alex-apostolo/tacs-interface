// Only requirement is a minus button with class minus-btn
// Uses Google Charts along with other elements to create this custom element
export default class TACSChart extends HTMLElement {

    static get observedAttributes() {
        return ['showminus'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if ('showminus' === name) {
            if (newValue === 'true') {
                let minusBtn = document.createElement('div');
                minusBtn.classList.add('minus-btn');
                this.append(minusBtn);
            } else if (newValue === 'false') {
                this.querySelector('.minus-btn').remove();
            }
        }
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                tacs-chart {
                    position: relative;
                }
                tacs-chart .minus-btn {
                    position: absolute;
                    top: 0;
                    right: 0;
                }

                tacs-chart .pie-chart {
                    margin-bottom: 2.5rem;
                }
            </style>
            <div class="pie-chart"></div>
        `
        if (this.hasAttribute('showminus')) {
            const showMinus = this.getAttribute('showminus');
            if (showMinus === "true") {
                let minusBtn = document.createElement('div');
                minusBtn.classList.add('minus-btn');
                this.append(minusBtn);
            }
        }
        this.draw();
    }

    // Takes a JSON string for data, an object for options and a string for type
    draw(data, options, type) {
        // Load the Visualization API and the piechart package.
        google.load('visualization', '1.0', { 'packages': ['corechart'] });

        // Set a callback to run when the Google Visualization API is loaded.
        google.setOnLoadCallback(drawChart.bind(this, data, options, type));

        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function drawChart(data, options, type) {
            if (data !== undefined) {
                // Convert JSON dats to googles DatsTable
            }
            // Default data shown below
            // Create the data table.
            let defaultData = new google.visualization.DataTable();

            defaultData.addColumn('string', 'Topping');
            defaultData.addColumn('number', 'Slices');
            defaultData.addRows([
                ['Mushrooms', 3],
                ['Onions', 1],
                ['Olives', 1],
                ['Zucchini', 1],
                ['Pepperoni', 2]
            ]);

            // Set chart options
            let defaultOptions = {
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

            // Instantiate and draw our chart, passing in some options.
            let chart;
            if (type === 'BarChart')
                chart = new google.visualization.BarChart(this.querySelector('.pie-chart'));
            else if (type === 'SpecificChart')
                chart = new google.visualization.PieChart(this.querySelector('.pie-chart'));
            else
                chart = new google.visualization.PieChart(this.querySelector('.pie-chart'));

            if (data !== undefined && options !== undefined)
                chart.draw(data, options);
            else if (data !== undefined && options === undefined)
                chart.draw(data, defaultData);
            else
                chart.draw(defaultData, defaultOptions);
        }
    }
}
customElements.define('tacs-chart', TACSChart);