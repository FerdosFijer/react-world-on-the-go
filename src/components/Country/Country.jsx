import  { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries }) => {
  //   console.log(country);
  //   console.log(handleVisitedCountries);

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    // console.log("btn clicked ");
    // setVisited(true);
    // setVisited(visited? false: true);
    setVisited(!visited); //! toggle kore felbe true thakle false kore fele and uporer 3 line same as this line
    handleVisitedCountries(country);
  };

  return (
    //!kivabe conditional add korbo class e & bracket r tamplate string dibo
    <div className={`country ${visited && "country-visited"}`}>
      <img
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
        srcset=""
      />
      <h3>Name:{country.name.common} </h3>
      <p>Population: {country.population.population}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
