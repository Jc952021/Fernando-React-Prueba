import React from 'react'
import HeroCard from './HeroCard'
import getHeroesForPublish from './selectors/getHeroesForPublish'

const HeroesList = ({publish}) => {
  
  const heroes = getHeroesForPublish(publish)
  console.log("xd")
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4 mt-5 animate__animated animate__fadeIn">
      {
        heroes.map(hero=>(
         <HeroCard key={hero.id} {...hero}/>
        ))
      }
    </div>
  )
}

export default HeroesList