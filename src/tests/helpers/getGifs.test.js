import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs.js Fetch', () => {

    test('Debe traer 15 elementos', async() => {
        
        const gifs = await getGifs('One Piece', 15);
        console.log(gifs.length);

        expect( gifs.length ).toBe( 15 );
        
    });

    test('Debe devolver un array vacío si no se manda categoría', async() => {
        
        const gifs = await getGifs('');
        console.log( gifs );

        expect( gifs.length ).toBe( 0 );
        
    });
    
});
