import React from 'react'
import ChartDoughnut from '../../Components/ChartDoughnut/ChartDoughnut'
import NavControls from '../../Components/Controls/NavControls'
import Table from '../../Components/Controls/Table'


const Products = () => {
    return (
        <div className='PageContainer'>

            <div className='TabConte'>
                <NavControls/>
                <Table/>
            </div>
            
            <div className='TabCharts'>
                <ChartDoughnut/>

            </div>

        </div>
    )
}

export default Products
