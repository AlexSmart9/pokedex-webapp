import './styles/Pagination.css'


const Pagination = ({ limit, page, setPage}) => {
    
    const handlePrev = () => { 
        if (page !== 0) {
            setPage(page-limit)
        } else{
            setPage(0)
        }
     }

     const handleNext = () => { 
        setPage(page+limit)
      }
  return (
    <div className='buttons__container flex-container'>
        <button className="button__next" onClick={handlePrev}>{'<'}</button>
        
        <button className="button__prev" onClick={handleNext}>{'>'}</button>
    </div>
  )
}

export default Pagination