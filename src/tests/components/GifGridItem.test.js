import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas con GifGridItem.js', () => {
    const title = 'Un título cualquiera';
    const url = 'https://localhost/imagen.jpg';
    
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('Debe mostrar el <GifGridItem /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe tener un párrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
    });

    test('Debe tener la imagen igual al url y alt de las props', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
        
    });

    test('Debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        // const className = div.prop('className');

        expect( div.hasClass('animate__fadeIn') ).toBe( true );
        // expect( className.includes('animate__fadeIn') ).toBe( true );

    })
        
    
})