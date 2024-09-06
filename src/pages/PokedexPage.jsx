import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/PokedexPage/SelectType'
import './styles/PokedexPage.css'
import Pagination from '../components/PokedexPage/Pagination'
import SelectLimit from '../components/PokedexPage/SelectLimit'

const PokedexPage = () => {
  const trainer = useSelector((states) => states.trainer)
  const [pokemons, getPokemons, getTypesPokemons] = useFetch()
  const [searchedName, setSearchedName] = useState("")
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  const [limit, setLimit] = useState(9)
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page}`
      getPokemons(url)
    } else {
      //peticion por type
      getTypesPokemons(typeSelected)
    }
  }, [typeSelected,limit,page])

  const handleSearch = (e) => { 
      e.preventDefault()
      setSearchedName(inputName.current.value.trim().toLowerCase())
   }

  const callbackFilter = (poke) => { 
    const filterName= poke.name.includes(searchedName)
    return filterName
   }

   const inputName = useRef()
  
  return (
    <div className='pokepage__container flex-container'>
      <div className='pokepage__head flex-container'>
        <p className='pokepage__text'>Welcome <span className='pokepage__text-name'>{trainer}</span>, here you'll find your favorite Pokemons</p>
        <form className='pokepage__form flex-container' onSubmit={handleSearch}>
          <input className='pokepage__input' type="text" placeholder='Search by name' ref={inputName}/>
          <button className='pokepage__btn' >Search</button>
          <SelectType setTypeSelected={setTypeSelected}/>
          
        </form>
      </div>
      
      <section className='pokemons__container flex-container'>
        {pokemons && !pokemons.results.some(callbackFilter) ? (
          <h2>There is no Pokemon that match the filter</h2>
        ) : (
          pokemons?.results
            .filter(callbackFilter)
            .map((poke) => <PokeCard key={poke.url} poke={poke} />)
        )}
      </section>
      <section>
        <Pagination limit={limit} page={page} setPage={setPage}/>
      </section>
    </div>
  )
}

export default PokedexPage