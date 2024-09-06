import React from 'react'

const SelectLimit = ({setLimit}) => {

    const handleLimit = (e) => { 
        setLimit(e.target.value)
     }
  return (
    <select onChange={handleLimit} >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
    </select>
  )
}

export default SelectLimit