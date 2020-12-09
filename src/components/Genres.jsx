import React from 'react';

const Genres = ({ genres: initGenres, onGenre, currentGenre, searchingMoviesLength }) => {

    const genres = [{_id: '', name: 'All genres'}, ...initGenres];

    return (
        <div
            className='col-3'
        >
            <ul className="list-group">
                {genres.map(genre => 
                    (<li 
                        key={genre._id} 
                        className={ (genre.name === currentGenre) && (searchingMoviesLength === 0) ? 'list-group-item active': 'list-group-item'}
                        onClick={() => onGenre(genre.name)}
                    >
                        {genre.name}
                    </li>)
                )}
            </ul>
        </div>
    );
}

export default Genres;