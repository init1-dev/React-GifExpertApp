import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid.js />', () => {

    const category = 'One piece';
    
    test('Debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imágenes con useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/imagen.jpg',
            title: 'Una imagen'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( 1 );
    })
    
});