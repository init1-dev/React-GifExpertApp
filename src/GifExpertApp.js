import React, { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const initialState = ['One Piece'];

    const [ categories, setCategories ] = useState(initialState);

    return (
        <>
            <h2 className="title animate__animated animate__rubberBand">GifExpertApp</h2>
            <CategoryAdd
                categories={ categories } 
                setCategories={ setCategories }
            />
            <hr />

            

            <ol>
                {
                    categories.map( category =>
                        <GifGrid
                            key={ category } 
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    );
};

export default GifExpertApp;

// <li key={ category }> { category } </li>

// const handleDel = (e) => {
//     const name = e.target.id;
//     setCategories( categories.filter(el => el !== name) );
// }

/* <button className="cat-btnDel" id={category} onClick={ handleDel }> X </button> */