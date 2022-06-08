import React from "react";
import { useParams,Navigate,useNavigate } from "react-router-dom";
import getHeroesForId from "../../../components/selectors/getHeroesForId";

const HeroesDashScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate()

  const hero = getHeroesForId(heroId);
if(!hero){
return <Navigate to="/"/>
}

const handleReturn=()=>{
  navigate(-1)
}
  const { superhero, publisher, alter_ego, first_appearance, characters } = hero

  return (
      <div className="row g-4">
        <div className="col-md-4">
          <img src={`../../../assets/heroes-img/${heroId}.jpg`} className="img-fluid rounded-start animate__animated animate__fadeInLeft" alt="..." />
        </div>
        <div className="col-md-8">
         <h2 >{superhero}</h2>
        <ul className="list-group list-gropu-flush">
         <li className="list-group-item"><b>Alter ego: {alter_ego}</b></li>
         <li className="list-group-item"><b>Publisher: {publisher}</b></li>
         <li className="list-group-item"><b>Primera Aparicion: {first_appearance}</b></li>
        </ul>
        <h3>Characters</h3>
        <p>{characters}</p>
        <button onClick={handleReturn} className="btn btn-outline-primary">Volver</button>
        </div>
      </div>
  )
};

export default HeroesDashScreen;
