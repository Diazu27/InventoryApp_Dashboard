import React, { useState } from 'react'

const Table = ({data, def}) => {

    const tableData = data.map((rowDa, index)=>{
        let rowData = [];

        for(let [k,v] of Object.entries(rowDa)){
            rowData.push(v);
        }
        return(
            <tr key={index}>
                {
                    rowData.map((rd, index)=>{
                        return <td key={index}>{rd}</td>
                    })
                }
                <td className='buttonbox'>
                    <button className='btn-edit'>Editar</button>
                    <button className='btn-delete'>Eliminar</button>
                </td>
            </tr>
        );
    })



    return (
       <div className='tableCont'>
        <table>
            <thead>
             <tr>
                {
                    def.map((header, index)=>{
                        return(<th key={index}>{header}</th>)
                    })
                }
                <th>Opciones</th>
             </tr>
            </thead>

            <tbody>
                {tableData}
            </tbody>
        </table>
       </div>
    )
}



export default Table



