import React from 'react'
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut, Pie} from 'react-chartjs-2';
Chart.register(ArcElement, Tooltip, Legend);

const state = {
    labels: [
        'Frutas',
        'Lacteos',
        'Carnes'
    ],
    datasets: [{
        data: [200, 50, 100],
        backgroundColor: [
            '#00a6ed',
            '#122b9b',
            '#06165c'
        ],
        hoverOffset: 4,
        borderWidth: 1
    }],
}

const ChartDoughnut = () => {
    return (
        <div className='charBox'>
            <Doughnut
            data={state}
            />
            <Pie
            data={state}
            />
        </div>
    )
}

export default ChartDoughnut
