import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countriesData = use (countriesPromise);
    // console.log(countriesData);
    const countries = countriesData.countries;  //! countriesData.countries ta json er obj er virote paisi
    // console.log(countries);

    return (
        <div>
            <h1>Hi I am here: {countries.length} </h1>
            <h1>Hi I am here: {countries.area} </h1>
            
        </div>
    );
};

export default Countries;