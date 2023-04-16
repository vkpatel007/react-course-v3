
import { useEffect, useState } from "react"
import { shortList, list, longList } from "./data"
import { FaQuoteRight } from "react-icons/fa"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"


const Carousel = () => {
  const [people, setPeople] = useState(longList)
  const [currentPerson, setCurrentPerson] = useState(1)


  const prevSlide = () => {
    setCurrentPerson((old) => {
      const result = (old - 1 + people.length) % people.length
      return result
    })
  }
  const nextSlide = () => {
    setCurrentPerson((old) => {
      const result = (old + 1) % people.length
      return result
    })
  }

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide()
    }, 2000)
    return () => { clearInterval(sliderId) }
  }, [currentPerson])

  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person
        return <article className="slide" style={{ transform: `translate(${100 * (index - currentPerson)}%)`, opacity: index === currentPerson ? 1 : 0, visibility: index === currentPerson ? 'visible' : 'hidden' }} key={id}>

          <img src={image} alt={name} className="person-img" />
          <h5 className="name">{name}</h5>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />



        </article>
      })}
      <button type="button" className="prev" onClick={prevSlide}><FiChevronLeft /></button>
      <button type="button" className="next" onClick={nextSlide}><FiChevronRight /></button>


    </section>
  )
}
export default Carousel