import React from 'react'
import ChartDoughnut from '../Components/ChartDoughnut/ChartDoughnut'
import NavControls from '../Components/Controls/NavControls'
import Table from '../Components/Controls/Table'


const data =[{
    id: 1,
    name: "Banano",
    categoryId: "Frutas",
    unitmeasure: "LB",
    priceByUnit: "200"
}]

const headerDef = ["Id", "Producto", "Categoria", "Medida", "Precio por unidad"];

const ProductsPage = () => {
    return (
        <div className='PageContainer'>

            <div className='TabConte'>
                <NavControls/>
                <Table data={data} def={headerDef}/>
            </div>
            
            <div className='TabCharts'>
                <ChartDoughnut/>

            </div>

        </div>
    )
}

export default ProductsPage
