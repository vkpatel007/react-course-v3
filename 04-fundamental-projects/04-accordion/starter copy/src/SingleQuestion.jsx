import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

const SingleQuestion = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false)


  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>


  )

}
export default SingleQuestion