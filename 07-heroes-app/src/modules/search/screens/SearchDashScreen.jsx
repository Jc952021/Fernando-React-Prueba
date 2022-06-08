import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string"
import useForm from "../../../hooks/useForm";

import HeroCard from "../../components/HeroCard";
import getHeroforName from "../../components/selectors/getHeroforName";

const SearchDashScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()
  
  const {q=""} = queryString.parse(location.search)
  
  const [values, changue] = useForm({
    buscar: q,
  });
  
  const { buscar } = values;

 const heroesFiltrados = useMemo(() => getHeroforName(q), [q]) 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${buscar}`)
  }

  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Formulario</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar"
              name="buscar"
              value={buscar}
              onChange={changue}
            />
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            heroesFiltrados.map(hero=><HeroCard key={hero.id} {...hero}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default SearchDashScreen;
