import React, { useState } from "react"
import AvaiableList from "./segments/AvaiableList"
import SelectedList from "./segments/SelectedList"
const Cart = () => {
  const [ListData, setListData] = useState([
    {
      doNo: "45AD478",
      pName: "Jelli",
      weight: 50,
      loadingOrder: "",
      selected: false
    },
    {
      doNo: "45AD788",
      pName: "Nili",
      weight: 25,
      loadingOrder: "",
      selected: false
    },
    {
      doNo: "45AD128",
      pName: "Mahji",
      weight: 10,
      loadingOrder: "",
      selected: false
    }
  ])
  const [selectData, setSelectData] = useState([])
  const handleOnChange = e => {
    ListData[e.target.getAttribute("targetid") - 1].selected = true

    if (ListData[e.target.getAttribute("targetid") - 1].selected == true) {
      let currentData = ListData.filter(item => item.doNo == e.target.id)

      setSelectData(prevState => {
        return [...prevState, currentData[0]]
      })
    }
  }

  const handleDelete=(e)=>{
    
    let currentSelected=selectData.filter((item)=>item.doNo!=e.target.id)
    ListData[e.target.getAttribute("targetid") - 1].selected = false
    setSelectData(currentSelected)
  } 

  return (
    <>
      <AvaiableList handleOnChange={handleOnChange} ListData={ListData} />
      <SelectedList handleDelete={handleDelete} ListData={selectData} />
    </>
  )
}

export default Cart
