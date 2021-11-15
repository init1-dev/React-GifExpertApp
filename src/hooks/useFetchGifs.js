import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category, limit ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    useEffect( () => {
        
        getGifs( category, limit )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            });

    }, [ category, limit ]);

    return state;
};