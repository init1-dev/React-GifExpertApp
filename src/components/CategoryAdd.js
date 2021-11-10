import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({ categories, setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // This could be done as helper function
        if( inputValue.trim().length > 2 && !undefined ) {
            if(categories.includes(inputValue)) {
                alert('This category already exist');
                setInputValue('');
            } else {
                setCategories( cats => [ inputValue, ...cats ] );
                setInputValue('');
            }
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                name="categories"
                id="categories"
                placeholder="Search Categories"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

export default CategoryAdd;

CategoryAdd.propTypes = {
    categories: PropTypes.array.isRequired,
    setCategories: PropTypes.func.isRequired
}