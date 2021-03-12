/*
 CSS Dependencies: minus-btn, dropdown 
*/
import { GoogleCharts } from 'google-charts';

// Uses Google Charts along with other elements to create this custom element
export default class TacsChart extends HTMLElement {

    static get observedAttributes() {
        return ['showminus', 'type'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'showminus') {
            if (newValue === 'true') {
                let minusBtn = document.createElement('div');
                minusBtn.classList.add('minus-btn');
                this.append(minusBtn);
                minusBtn.addEventListener('click', () => {
                    this.remove();
                })
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

                tacs-chart .dropdown {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 2;
                }

                tacs-chart .minus-btn {
                    position: absolute;
                    top: 0;
                    right: 0;
                }

                tacs-chart .tacs-container {
                    margin-bottom: 2.5rem;
                }
            </style>
            <div class="dropdown">
                <button class="dropdown-btn">Dictionary</button>
                <ul>
                    <li><button>Dictionary</button></li>
                    <li><button>Category</button></li>
                    <li><button>Concept</button></li>
                </ul>
            </div>
            <div class="tacs-container"></div>
        `
        if (this.hasAttribute('showminus')) {
            const showMinus = this.getAttribute('showminus');
            if (showMinus === "true") {
                let minusBtn = document.createElement('div');
                minusBtn.classList.add('minus-btn');
                this.append(minusBtn);
                minusBtn.addEventListener('click', () => {
                    this.remove();
                })
            }
        }

        const dropdownBtn = this.querySelector('.dropdown .dropdown-btn');
        const dropdownUl = this.querySelector('.dropdown ul');
        dropdownUl.style.display = 'none';
        dropdownBtn.addEventListener('focus', () => dropdownUl.style.display = 'block');
        dropdownBtn.addEventListener('blur', () => dropdownUl.style.display = 'none');
        const levels = this.querySelectorAll('.dropdown ul li button');
        levels.forEach(element => {
            let level = 'dict';
            switch (element.innerText) {
                case 'Dictionary':
                    level = 'dict';
                    break;
                case 'Category':
                    level = 'cat';
                    break;
                case 'Concept':
                    level = 'concept';
                    break;
            }
            element.addEventListener('mousedown', e => {
                this.drawChart({ type: this.type, data: this.data, options: this.options, level: level })
                dropdownBtn.innerText = element.innerText;
            })
        });

        this.hasAttribute('type') ? this.drawChart({ type: this.getAttribute('type') }) : this.drawChart();
    }

    // Wrapper method for drawChartCallback
    drawChart({ type = 'PieChart', data, level = 'dict', options } = {}) {
        this.level = level;
        this.type = type;
        this.data = data;
        this.options = options;
        // Set a callback to run when the Google Visualization API is loaded.
        GoogleCharts.load(this.drawChartCallback.bind(this, type, data, level, options));
    }

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    drawChartCallback(type, data, level, options) {
        if (options === undefined) {
            // Set chart options
            options = {
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
        }

        if (data !== undefined) {
            // Draw based on level
            let googleData, res, arr;
            let count = [];
            switch (type) {
                case 'PieChart':
                    googleData = new GoogleCharts.api.visualization.DataTable();
                    googleData.addColumn('string', 'terms');
                    googleData.addColumn('number', 'frequency');
                    // count consists of the tacs analysis
                    data.forEach(element => count = count.concat(element[1]));
                    // TODO: Change based on level
                    res = Object.values(count.reduce((acc, cur) => (acc[cur[level]]
                        ? (acc[cur[level]].freq += cur.freq)
                        : (acc[cur[level]] = { ...cur }), acc), {}))
                        .map(item => [item[level], item.freq]);

                    googleData.addRows(res);
                    data = googleData;
                    break;
                case 'ColumnChart':
                    data.forEach(element => count = count.concat(element[1]));
                    arr = [count.map(item => item[level])
                        .filter((value, index, self) => self.indexOf(value) === index)];
                    arr[0].unshift('File');

                    res = data.forEach(el => {
                        res = [];
                        res.push(el[0]);
                        let ac = (Object.values(el[1].reduce((acc, cur) => (acc[cur[level]]
                            ? (acc[cur[level]].freq += cur.freq)
                            : (acc[cur[level]] = { ...cur }), acc), {})));
                        arr[0].forEach(element => {
                            if (element !== 'File') {
                                let o = ac.filter(value => value[level] === element);
                                o[0] === undefined ? res.push(0) : res.push(o[0].freq);
                            }
                        });
                        arr.push(res);
                    });

                    data = GoogleCharts.api.visualization.arrayToDataTable(arr);
                    break;
                case 'BarChart':
                    data.forEach(element => count = count.concat(element[1]));
                    arr = [count.map(item => item[level])
                        .filter((value, index, self) => self.indexOf(value) === index)];
                    arr[0].unshift('File');

                    res = data.forEach(el => {
                        res = [];
                        res.push(el[0]);
                        let ac = (Object.values(el[1].reduce((acc, cur) => (acc[cur[level]]
                            ? (acc[cur[level]].freq += cur.freq)
                            : (acc[cur[level]] = { ...cur }), acc), {})));
                        arr[0].forEach(element => {
                            if (element !== 'File') {
                                let o = ac.filter(value => value[level] === element);
                                o[0] === undefined ? res.push(0) : res.push(o[0].freq);
                            }
                        });
                        arr.push(res);
                    });

                    data = GoogleCharts.api.visualization.arrayToDataTable(arr);
                    options.isStacked = 'percent';
                    break;
            }
        }

        // The below conditional statements outline the default behaviour
        if (data === undefined) {
            switch (type) {
                case 'PieChart':
                    data = new GoogleCharts.api.visualization.DataTable();
                    data.addColumn('string', 'Topping');
                    data.addColumn('number', 'Slices');
                    data.addRows([
                        ['Mushrooms', 3],
                        ['Onions', 1],
                        ['Olives', 1],
                        ['Zucchini', 1],
                        ['Pepperoni', 2]
                    ]);
                    break;
                case 'ColumnChart':
                    data = new GoogleCharts.api.visualization.DataTable();
                    data.addColumn('string', 'Year');
                    data.addColumn('number', 'Sales');
                    data.addColumn('number', 'Expenses');
                    data.addRows([
                        ['2004', 1000, 400],
                        ['2005', 1170, 460],
                        ['2006', 860, 580],
                        ['2007', 1030, 540]
                    ]);
                    break;
                case 'BarChart':
                    data = GoogleCharts.api.visualization.arrayToDataTable([
                        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
                            'Western', 'Literature', { role: 'annotation' }],
                        ['2010', 10, 24, 20, 32, 18, 5, ''],
                        ['2020', 16, 22, 23, 30, 16, 9, ''],
                        ['2030', 28, 19, 29, 30, 12, 13, '']
                    ]);
                    options.isStacked = 'percent';
                    break;
            }
        }

        // Instantiate and draw our chart, passing in some options.
        let chart;
        if (type === 'ColumnChart')
            chart = new GoogleCharts.api.visualization.ColumnChart(this.querySelector('.tacs-container'));
        else if (type === 'BarChart')
            chart = new GoogleCharts.api.visualization.BarChart(this.querySelector('.tacs-container'));
        else
            chart = new GoogleCharts.api.visualization.PieChart(this.querySelector('.tacs-container'));

        chart.draw(data, options);
    }

}
customElements.define('tacs-chart', TacsChart);