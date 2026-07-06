import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use (countriesPromise); //! 1 ta object file e 3 ta file paisi, counties e dukbo const countries diye
    // console.log(countriesData);
    const countries = countriesData.countries;  //! dot.countries ta json obj er virote paisi and er por array ache tai map calabo
    // console.log(countries);

    return (
        <div>
            <h1>Total Country: {countries.length} </h1>

             {/*//! Map tkne korboo jkn Array asbe [] */}
            {
                countries.map(country1 => <Country key={country1.cca3.cca3} country={country1}> </Country>)
            }
        </div>
    );
};

export default Countries;