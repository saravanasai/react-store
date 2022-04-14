import React from "react";

const AvaiableList = ({ListData,handleOnChange}) => {
    return ( 
        <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Delivery No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Qty-Tons</th>
              <th scope="col">Select</th>
            </tr>
          </thead>
          <tbody>
            {ListData.map(({ doNo, pName, weight,loadingOrder ,selected}, index) => {
              return (
                <tr key={doNo}>
                  <th scope="row">{++index}</th>
                  <td>{doNo}</td>
                  <td>{pName}</td>
                  <td>{weight}</td>
                  <td>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        onChange={handleOnChange}
                        checked={selected}
                        disabled={selected}
                        className="form-check-input"
                        id={doNo}
                        targetId={index}
                      />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
     );
}
 
export default AvaiableList;