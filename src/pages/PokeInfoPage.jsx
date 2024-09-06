import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokeInfoPage.css'


const PokeInfoPage = () => {
  const {name} = useParams()
  const [pokemon, getPokemons] = useFetch()
 

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    getPokemons(url)
  }, [name])

  console.log(pokemon)
  
  return (
    <div className="pokeinfo flex-container">
      <section className={`pokeinfo__card border__${pokemon?.types[0].type.name}`}>
          <header className={`pokeinfo__header bg__${pokemon?.types[0].type.name}`}>
            <img className="pokeinfo__header-img" src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
          </header>
          <h2 className={`pokeinfo__id text__${pokemon?.types[0].type.name}`}>
           #{pokemon?.id}
          </h2>
          <h3 className={`pokeinfo__name text__${pokemon?.types[0].type.name}`}>{pokemon?.name}
          </h3>
          <div className="pokeinfo__data flex-container">
            <h3>Weight
              <p className="pokeinfo__data-value">{pokemon?.weight}</p>
            </h3>
            <h3>Height
              <p className="pokeinfo__data-value">{pokemon?.height}</p>
            </h3>
          </div>
          <div className="pokeinfo__items flex-container">
            <div className="pokeinfo__types">
              <p className="pokeinfo__types-text">Types</p>
              {
                pokemon?.types.length >= 2 ? (
                <div className="pokeinfo__types-container grid-container">
                  <p className={`pokeinfo__types-values bg__${pokemon?.types[0].type.name}`}>{pokemon?.types[0].type.name}</p>
                  <p className={`pokeinfo__types-values bg__${pokemon?.types[1].type.name}`}>{pokemon?.types[1].type.name}</p>
                </div>) : (
                  <div className="pokeinfo__types-container flex-container">
                    <p className={`pokeinfo__types-value bg__${pokemon?.types[0].type.name}`}>{pokemon?.types[0].type.name}</p>
                  </div>)
              }
              
            </div>
            <div className="pokeinfo__skills">
              <p className="pokeinfo__skills-text">Skills</p>
              <div className="pokeinfo__skills-container grid-container">
                {
                  pokemon?.abilities.slice(0,2).map((skillInfo) => (
                <p className="pokeinfo__skills-value" key={skillInfo.ability.url}>{skillInfo.ability.name}</p>
              ))
            }
              </div>
            </div>
          </div>
          <h2 className="pokeinfo__stats-title">Stats</h2>
          <div className="pokeinfo__stats">
            <div className="pokeinfo__stats-container flex-container">
              <h3 className="pokeinfo__stats-name">{pokemon?.stats[0].stat.name}</h3><span className="pokeinfo__stats-value">{pokemon?.stats[0].base_stat}/150</span>
            </div>
            <progress className="pokeinfo__stats-progress" value={pokemon?.stats[0].base_stat} max={150}></progress>
            <div className="pokeinfo__stats-container flex-container">
              <h3 className="pokeinfo__stats-name">{pokemon?.stats[1].stat.name}</h3><span className="pokeinfo__stats-value">{pokemon?.stats[1].base_stat}/150</span>
            </div>
            <progress className="pokeinfo__stats-progress" value={pokemon?.stats[1].base_stat} max={150}></progress>
            <div className="pokeinfo__stats-container flex-container">
              <h3 className="pokeinfo__stats-name">{pokemon?.stats[2].stat.name}</h3><span className="pokeinfo__stats-value">{pokemon?.stats[2].base_stat}/150</span>
            </div>
            <progress className="pokeinfo__stats-progress" value={pokemon?.stats[2].base_stat} max={150}></progress>
            <div className="pokeinfo__stats-container flex-container">
              <h3 className="pokeinfo__stats-name">{pokemon?.stats[5].stat.name}</h3><span className="pokeinfo__stats-value">{pokemon?.stats[5].base_stat}/150</span>
            </div>
            <progress className="pokeinfo__stats-progress" value={pokemon?.stats[5].base_stat} max={150}></progress>
          </div>
      </section>
      <section className="pokeinfo__movements flex-container">
        <h2 className="pokeinfo__movements-title">Movements</h2>
        <div className="pokeinfo__movements-container flex-container">
        {
                pokemon?.moves.splice(0, 30).map((moveInfo) =>  (
                  <p className="pokeinfo__movement-item" key={moveInfo.move.url}>{moveInfo.move.name}</p>
                ))
            }
        </div>

      </section>
    </div>
  )
}

export default PokeInfoPage