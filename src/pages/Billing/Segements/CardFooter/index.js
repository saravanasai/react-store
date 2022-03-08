import React, { useState } from "react"

const CardFooter = ({productsList,products,setPassState}) => {


  const [stateTable,setStateTable]=useState(1)
 
  const handleOnChange=()=>{
    setStateTable(prevState=>prevState+1)
    setPassState(prevState=>prevState+1)
  }
const getTotal=()=>{
    let total=0
    productsList.map(({currentProduct,currentQuantity})=>{
       
        total+=Number(products[currentProduct]*currentQuantity)
        
    })
    return total
}
 

console.log("footer component \t:",stateTable);

  return (
    <>
      <div className="card-footer">
        <div className="row">
          <div className="d-flex">
            <div className="container">
              <div className="row">
                <div className="col-md-9"></div>
                <div className="col-md-3 d-flex">
                  <div className="px-2">
                    <input
                      type="text"
                      className="input-block-level"
                      autoComplete="off"
                      readOnly 
                      value={getTotal()}
                    />
                  </div>
                  <div className="px-2">
                    <button className="btn btn-success px-2" onClick={handleOnChange}>Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardFooter
