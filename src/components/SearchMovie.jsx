import React from 'react'
import { useState } from 'react';
import Input from './common/Input';

const SearchMovie = ({ handleSearchMovie, searchingMoviesLength }) => {

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(undefined);
    console.log('searchingMoviesLength', searchingMoviesLength);


    const handleChange = ({ currentTarget: input }) => {
        setInputValue(input.value);

        // recherche d'un movie
        handleSearchMovie(input.value);

        let error;

        if (inputValue.length > 0) {
            if (searchingMoviesLength === 0) {
                error = 'Sorry, no movie!';
            } else {
                error= undefined;
            }
            setError(error);
        }
    }

    return (
        <form>
            <Input
                label=""
                name="search"
                placeholder="Search..."
                value={inputValue}
                onChange={handleChange}
                error={error}
            />
        </form>
    );
}



export default SearchMovie;