import React from "react"

const SelectedList = ({ ListData, handleDelete }) => {

  let totalTonage=0

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Delivery No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Qty-Tons</th>
            <th scope="col">Loading Order</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {ListData.map(({ doNo, pName, weight }, index) => {
              totalTonage+=weight
            return (
              <tr key={doNo}>
                <th scope="row">{++index}</th>
                <td>{doNo}</td>
                <td>{pName}</td>
                <td>{weight}</td>
                <td>{index}</td>
                <td><button type="button" onClick={handleDelete}   targetId={index} id={doNo} class="btn btn-danger btn-sm btn-block">Remove</button></td>
              </tr>
            )
          })}
          <tr>
            <td colSpan={4}></td>
            <td colSpan={1}>Total Tonage</td>
            <td>{totalTonage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SelectedList
