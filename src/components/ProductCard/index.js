import React from "react"

const ProductCard = ({productName,price}) => {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal"> {productName}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
             {productName}
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>RS-{price}</li>
          </ul>
          <button
            type="button"
            className="w-100 btn btn-lg btn-outline-primary"
          >
           Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
