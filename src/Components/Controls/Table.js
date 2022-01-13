import React from 'react'

const Table = () => {

    var prod =["Pollo", "Res", "Fresas", "Papaya", "Aguacate", "limones", "Mangos", "cebollas", "Nance", "Pan Molde","Platano",
    "Pollo", "Res", "Fresas", "Papaya", "Aguacate", "limones", "Mangos", "cebollas", "Nance", "Pan Molde","Platano"];

    return (
       <div className='tableCont'>
        <table>
            <thead>
             <tr>
                <th>id</th>
                <th>Producto</th>
                <th>Catergoria</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Opciones</th>
             </tr>
            </thead>

            <tbody>
              {
                  prod.map((Producto, index)=>{
                    return(
                        <tr key={index}>
                        <td>{index}</td>
                        <td>{Producto}</td>
                        <td>Carnes</td>
                        <td>200</td>
                        <td>400.00</td>
                        <td className='buttonbox'>
                            <button className='btn-edit'>Editar</button>
                            <button className='btn-delete'>Eliminar</button>
                        </td>
                        </tr>
                    );
                  })
              }
              
            </tbody>



        </table>
       </div>
    )
}

export default Table
