import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category, categories, setCategories }) => {

    const { data:images, loading } = useFetchGifs( category, 15 );

    const handleDel = (e) => {
        const name = e.target.id;
        setCategories( categories.filter(el => el !== name) );
    }

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">
                { category }
                <button className="cat-btnDel" id={category} onClick={ handleDel }> X </button>
                <subtitle className="search-sub">(Click GIF to copy Url)</subtitle>
            </h3>


            { loading && <p className="animate__animated animate__flash">Loading..</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    setCategories: PropTypes.func.isRequired
}