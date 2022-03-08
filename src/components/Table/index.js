import React, { useState } from "react"

const Table = ({productsList,products,ProductName,DeleteFromList}) => {




  const [stateTable,setStateTable]=useState(1)
 
  const handleOnChange=()=>{
    setStateTable(prevState=>prevState+1)
  }

console.log("Table component");


  return (
    <div className="container">
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Total</th>
          <th scope="col">remove</th>
        </tr>
      </thead>
      <tbody>
      {productsList.map(({currentProduct,currentQuantity},index)=>{
          return ( <tr>
            <th scope="row">{++index}</th>
            <td>
                <input
                  type="text"
                  className="input-block-level"
                  value={ProductName[currentProduct]}
                  readOnly
                /> 
            </td>
            <td>
              
                <input
                  type="text"
                  className="input-block-level"
                  autoComplete="off"
                  readOnly
                  value={currentQuantity}
                />
             
            </td>
            <td>
              
                <input
                  type="text"
                  className="input-block-level"
                  autoComplete="off"
                  value={products[currentProduct]}
                  readOnly
                />
             
            </td>
            <td>
              
                <input
                  type="text"
                  className="input-block-level"
                  autoComplete="off"
                  value={products[currentProduct]*currentQuantity}
                  readOnly
                />
              
            </td>
            <td>
                <button className="btn btn-sm btn-danger" type="button" onClick={handleOnChange} >Delete</button>
            </td>
          </tr>)
      })}
      </tbody>
    </table>
        </div>
  )
}

export default Table
