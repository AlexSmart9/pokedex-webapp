import './styles/Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__red-block'>
            <div className='header__red-child'></div>
            <div className='header__red-child2'></div>
            <img className='header__red-img' src="/img/pokebanner-removebg-preview.png" alt="" />
        </div>
        <div className='header__black-block'></div>
    </div>
  )
}

export default Header