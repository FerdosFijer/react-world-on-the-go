import { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise); //! 1 ta object file e 3 ta file paisi, counties e dukbo const countries diye
  // console.log(countriesData);
  const countries = countriesData.countries; //! dot.countries ta json obj er virote paisi and er por array ache tai map calabo
  // console.log(countries);

  //! lift up the state next 5 line kortesi karon: Amra protome akta state decleare korbo
  //! handaler function banabo and handaler ta map kore props ta  button er file a patabo distructuring kore
  //! seta params akare receive korbe and params akare receive howa file ta button file e handlaer e add korbo
  //! and button er main params ta k abr protomer file a patabo handaler e and ota diye kaj korbo

  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log("handle visited country clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <>
      <h1>Total Country: {countries.length} </h1>
      <h2>Total Country Visited : {visitedCountries.length} </h2>

      <ol>
       { visitedCountries.map (country2  =>  <li key={country2.cca3.cca3}> {country2.name.common}</li>)}
      </ol>

      <div className="countries">
        {/*//! Map tkne korboo jkn Array asbe [] */}
        {countries.map((country1) => (
          <Country
            //! country1 map er props and country params hisebe patay
            key={country1.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country1}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
