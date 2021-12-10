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
        if( inputValue.trim().length > 2 ) {
            const categoria = inputValue.toLowerCase();
            !categories.includes(categoria) &&
            setCategories( cats => [ categoria, ...cats ] );
            setInputValue('');
        };
    };

    return (
        <form onSubmit={ handleSubmit }>
            {/* <p>{ inputValue }</p> */}
            <input
                type="text"
                // name="categories"
                // id="categories"
                placeholder="Search Categories"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

export default CategoryAdd;

CategoryAdd.propTypes = {
    // categories: PropTypes.array.isRequired,
    setCategories: PropTypes.func.isRequired
}