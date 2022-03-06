import React from "react"

const CardFooter = ({productsList,products}) => {


const getTotal=()=>{
    let total=0
    productsList.map(({currentProduct,currentQuantity})=>{
       
        total+=Number(products[currentProduct]*currentQuantity)
        
    })
    return total
}
 

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
                    <button className="btn btn-success px-2">Checkout</button>
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
