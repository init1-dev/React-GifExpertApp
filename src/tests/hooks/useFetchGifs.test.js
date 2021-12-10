import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en custom hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece', 10 ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        // console.log(data, loading);

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    });

    test('Debe retornar un arreglo de imágenes y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece', 10 ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    })
    
    
});
