/*
 CSS Dependencies: minus-btn, menu 
*/
import { GoogleCharts } from 'google-charts';
import DataFrame from 'dataframe-js';

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
                    max-width: 100vw;
                }

                tacs-chart .menu {
                    position: absolute;
                    top: 0;
                    z-index: 10;
                }

                tacs-chart .minus-btn {
                    position: absolute;
                    top: 0;
                    right: 10px;
                }

                tacs-chart .tacs-container {
                    margin-bottom: 40px;
                }
            </style>
            <div class="menu">
                <button class="menu-hover">Dictionary</button>
                <ul>
                    <li><button class="level">Dictionary</button></li>
                    <li class="sub-menu"><button>Category</button>
                        <ul>
                            <li><button class="level" data-type="Category">All</button></li>
                            <li><button class="level">Security</button></li>
                            <li><button class="level">Context</button></li>
                        </ul>
                    </li>
                    <li class="sub-menu"><button>Concept</button>
                        <ul>
                            <li><button class="level" data-type="Concept">All</button></li>
                            <li class="sub-menu"><button>Security</button>
                                <ul>
                                    <li><button class="level" data-type="Concept Security">All</button></li>
                                    <li><button class="level">Threat Actor</button></li>
                                    <li><button class="level">Threat General</button></li>
                                    <li><button class="level">Threat Mechanism</button></li>
                                    <li><button class="level">Safety Actor</button></li>
                                    <li><button class="level">Safety General</button></li>
                                    <li><button class="level">Safety Mechanism</button></li>
                                </ul>
                            </li>
                            <li class="sub-menu"><button>Context</button>
                                <ul>
                                    <li><button class="level" data-type="Concept Context">All</button></li>
                                    <li><button class="level">Individual</button></li>
                                    <li><button class="level">Cyber Entity</button></li>
                                    <li><button class="level">Quality</button></li>
                                    <li><button class="level">Activity</button></li>
                                    <li><button class="level">Organasation</button></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
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

        const levels = this.querySelectorAll('.level');
        levels.forEach(element => {
            let level = 'dict';
            let filter;
            const displayName = {cat: 'Category', dict: 'Dictionary', concept: 'Concept'};
            switch (element.innerText) {
                case 'All':
                    switch (element.dataset.type) {
                        case 'Category':
                            level = 'cat';
                            break;
                        case 'Concept':
                            level = 'concept';
                            break;
                        case 'Concept Security':
                            level = 'concept';
                            filter = {prevLevel: 'dict', selection: 'Security'};
                            break;
                        case 'Concept Context':
                            level = 'concept';
                            filter = {prevLevel: 'dict', selection: 'Context'};
                            break;
                    }
                    break;
                case 'Dictionary':
                    level = 'dict';
                    break;
                case 'Security':
                    level = 'cat';
                    filter = {prevLevel: 'dict', selection: 'Security'};
                    break;
                case 'Context':
                    level = 'cat';
                    filter = {prevLevel: 'dict', selection: 'Context'};
                    break;
                case 'Threat Actor':
                case 'Threat General':
                case 'Threat Mechanism':
                case 'Safety Actor':
                case 'Safety General':
                case 'Safety Mechanism':
                case 'Individual':
                case 'Cyber Entity':
                case 'Quality':
                case 'Activity':
                case 'Organasation':
                    level = 'concept';
                    filter = {prevLevel: 'cat', selection: element.innerText};
                    break;
            }
            element.addEventListener('mousedown', () => {
                this.drawChart({ type: this.type, data: this.data, options: this.options, level: level, filter: filter, groups: this.groups })
                this.querySelector('.menu-hover').innerText = displayName[this.level];
            })
        });

        this.hasAttribute('type') ? this.drawChart({ type: this.getAttribute('type') }) : this.drawChart();
    }

    // Wrapper method for drawChartCallback
    drawChart({ type = 'PieChart', data, level = 'dict', filter, options, groups } = {}) {
        this.level = level;
        this.filter = filter;
        this.type = type;
        this.data = data;
        this.options = options;
        this.groups = groups;
        // Set a callback to run when the Google Visualization API is loaded.
        GoogleCharts.load(this.drawChartCallback.bind(this, type, data, level, filter, options, groups));
    }

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    drawChartCallback(type, data, level, filter, options, groups) {
        // let dev_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        let dev_width = screen.width;
        let width = dev_width > 420 ? 420 : dev_width;
        let height = dev_width > 420 ? 320 : (width / 420) * 320;
        if (options === undefined) {
            // Set chart options
            options = {
                width: width - 35,
                height: height,
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
                vAxis: {
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
            let result;
            switch (type) {
                case 'PieChart': {
                    result = [];
                    // Combine all tacs_count in one string named 'count'
                    let count = [];
                    data.forEach(row => count = count.concat(row[1]));
                    // Create a DataFrame from count
                    let df = new DataFrame(count);
                    if (filter !== undefined) {
                        df = df.filter(value => value.get(filter.prevLevel) === filter.selection);
                    }
                    // GroupBy the level selected and include frequency
                    result = df.groupBy(level).aggregate(group => group.reduce((p, n) => n.get('freq') + p, 0)).rename('aggregation', 'groupCount').toArray();
                    result.unshift(['Term', 'Frequency']);
                    break;
                }
                case 'ColumnChart': {
                    result = undefined;
                    // Counter for groups iterated 
                    let group = 0;
                    // Counter for files iterated
                    let file = 0;
                    groups.forEach(fileCount => {
                        // Combine all the files of the group to count[]
                        let count = [];
                        for (let i = file; i < fileCount + file; i++)
                            count = count.concat(data[i][1]);
                        // Create a DataFrame from count
                        let df = new DataFrame(count);
                        if (filter !== undefined) {
                            df = df.filter(value => value.get(filter.prevLevel) === filter.selection);
                        }
                        // GroupBy the level selected and include the count for each group
                        const res = df.groupBy(level).aggregate(group => group.reduce((p, n) => n.get('freq') + p, 0)).rename('aggregation', 'groupCount').toArray();
                        res.unshift(['Term', 'Group ' + ++group]);
                        result = result === undefined ? new DataFrame(res) : result.withColumn(group + 1, (_, index) => index < res.length ? res[index][1] : 0);
                        file += fileCount;
                    })
                    result = result.toArray();
                    this.querySelector('.tacs-container').style.marginTop = '1.5rem';
                    options.chartArea = { width: '82%', height: '70%' };
                    break;
                }
                case 'BarChart': {
                    result = [];
                    data.forEach(row => {
                        let df = new DataFrame(row[1]);
                        if (filter !== undefined) {
                            df = df.filter(value => value.get(filter.prevLevel) === filter.selection);
                        }
                        // GroupBy the level selected and include frequency
                        let temp = df.groupBy(level).aggregate(group => group.reduce((p, n) => n.get('freq') + p, 0)).rename('aggregation', 'groupCount').toArray();
                        temp.unshift(['file', row[0]]);
                        // Create a link for tacs_annotate
                        let blob = new Blob([row[2]], {
                            type: 'text/html;charset=utf-8'
                        });
                        let url = URL.createObjectURL(blob);
                        temp.push(["link", url]);
                        // Append to result as object
                        result.push(Object.fromEntries(temp));
                    });
                    let df = new DataFrame(result);
                    result = df.toArray();
                    result.unshift(df.listColumns());
                    result[0][result[0].indexOf('link')] = { role: 'link' };
                    // Extra Options for Chart
                    options.isStacked = 'percent';
                    options.chartArea = { width: '80%', height: '80%' };
                    break;
                }
            }
            data = GoogleCharts.api.visualization.arrayToDataTable(result);
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
        else if (type === 'BarChart') {
            chart = new GoogleCharts.api.visualization.BarChart(this.querySelector('.tacs-container'));
            GoogleCharts.api.visualization.events.addListener(chart, 'select', () => {
                var row = chart.getSelection()[0].row;
                let link = data.getValue(row, 3);
                window.open(link);
            });
        }
        else
            chart = new GoogleCharts.api.visualization.PieChart(this.querySelector('.tacs-container'));

        GoogleCharts.api.visualization.events.addListener(chart, 'error', err => {
            GoogleCharts.api.visualization.errors.removeError(err.id);
        })
        chart.draw(data, options);
    }

}
customElements.define('tacs-chart', TacsChart);