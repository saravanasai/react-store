import React, { useState } from "react"
import Table from "../../components/Table"
import CardFooter from "./Segements/CardFooter/index"

const Billing = () => {
  const products = ["45", "55", "65"]
  const avaiableProducts = ["soap", "oil", "jam"]

  const [currentProduct, setCurrentProduct] = useState({
    currentProduct: "",
    currentQuantity: ""
  })

  const [cartProducts, setCartProducts] = useState([])

  const handleProductChange = e => {
    setCurrentProduct({ ...currentProduct, currentProduct: e.target.value })
  }
  const handleQuantityChange = e => {
    setCurrentProduct({ ...currentProduct, currentQuantity: e.target.value })
  }

  const addProductsToBill = () => {
    setCartProducts([...cartProducts, currentProduct])
    setCurrentProduct({ currentProduct: "", currentQuantity: "" })
  }


  const DeleteFromList=(id)=>{

    cartProducts.pop()
  }

  return (
    <>
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="container">
              <>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total</th>
                      <th scope="col">ADD</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <div class="form-group">
                          <select
                            class="form-control"
                            name="products"
                            onChange={handleProductChange}
                            value={currentProduct.currentProduct}
                          >
                            <option value="">Choose Product</option>
                            <option value="0">Soap</option>
                            <option value="1">oil</option>
                            <option value="2">Jam</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="input-block-level"
                          autoComplete="off"
                          maxLength={4}
                          onChange={handleQuantityChange}
                          value={currentProduct.currentQuantity}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="input-block-level"
                          autoComplete="off"
                          value={products[currentProduct.currentProduct] || 0}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="input-block-level"
                          autoComplete="off"
                          value={
                            products[currentProduct.currentProduct] *
                              currentProduct.currentQuantity || 0
                          }
                          readOnly
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-success"
                          type="button"
                          onClick={addProductsToBill}
                        >
                          ADD
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-5">
        <div className="container">
          <div className="row">
            <div className="container">
              <Table
                productsList={cartProducts}
                products={products}
                ProductName={avaiableProducts}
                DeleteFromList={DeleteFromList}
              />
            </div>
          </div>
        </div>
        <CardFooter productsList={cartProducts} products={products} />
      </div>
    </>
  )
}

export default Billing
