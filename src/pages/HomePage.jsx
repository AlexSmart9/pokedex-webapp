import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainer } from '../store/slices/trainer.slice'
import { useNavigate } from 'react-router-dom'
import './styles/HomePage.css'

const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) => { 
      e.preventDefault()
      dispatch(setTrainer(inputTrainer.current.value.trim()))
      navigate('/pokedex')
   }

   const inputTrainer = useRef()


  return (
    <div className='pokedex flex-container'>
      <div className='pokedex__container flex-container'>
        <img className='pokedex__img' src="/img/pokebanner-removebg-preview.png" alt="pokedex" />
        <h2 className='pokedex__welcome'>!Hi Trainer¡</h2>
        <p className='pokedex__text'>If you want to find your favorite pokemon, please create a trainer name</p>
        <form className='pokedex__form flex-container' onSubmit={handleSubmit} >
            <input className='pokedex__input' type="text" placeholder='Create a trainer name with more than three characters' ref={inputTrainer} 
            maxLength={10}/>
            <button className='pokedex__btn'>Catch Them All!</button>
        </form>
      </div>
      <div className='pokedex__footer flex-container'>
      <div className='pokedex__red-line '></div>
      <div className='pokedex__black-line'></div>
      </div>
    </div>
    
  )
}

export default HomePage