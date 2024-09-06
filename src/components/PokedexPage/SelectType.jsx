import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/SelectType.css'

const SelectType = ({setTypeSelected}) => {

    const [types, getTypes] = useFetch()

    useEffect(() => {
      const url = 'https://pokeapi.co/api/v2/type'
      getTypes(url)
    }, [])

    const handleChange = (e) => { 
        setTypeSelected(e.target.value)
     }
    
  return (
      <select className='filter__container flex-container' onChange={handleChange}>
        <option className='filter__type flex-container' value="allPokemons">All Pokemons</option>
        {types?.results.map((typeInfo) => (
            <option className='type' key={typeInfo.url} value={typeInfo.url}>
                {typeInfo.name}
            </option>
        ))}
      </select>
  )
}

export default SelectType