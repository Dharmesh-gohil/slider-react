import { useState } from 'react'
import { shortList} from './data'
import { FaQuoteRight } from "react-icons/fa"
import {FiChevronLeft,FiChevronRight } from "react-icons/fi"

const Carousel = () => {
const [people,setPeople]=useState(shortList)

    const prevSlide = () => { console.log("hello") }
    const nextSlide = () => { console.log("hello")}
  return (
      <section className='slider-container'>
          {people.map((person) => {
              console.log(person)
              const { id,image,name,quote,title}=person
              return <article className='slide' key={id}>
                  <img src={image} alt={name} className='person-img' />
                  <h5 className='name'>{name}</h5>
                  <p className='title'>{title}</p>
                  <p className='text'>{quote}</p>
                  <FaQuoteRight className="icon"/>
                  
              </article>
          })}
          <button className='prev' type='button' onClick={prevSlide}>
              <FiChevronLeft/>
          </button>
          <button className='next' type='button' onClick={nextSlide}>
              <FiChevronRight/>
          </button>
    </section>
  )
}
export default Carousel