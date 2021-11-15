import { shallow } from 'enzyme';
import CategoryAdd from '../../components/CategoryAdd';

describe('Pruebas en <CategoryAdd.js />', () => {

    // const setCategories = () => {};

    const setCategories = jest.fn();

    let wrapper;
    
    beforeEach( () => {
        jest.clearAllMocks();

        wrapper = shallow( <CategoryAdd setCategories={ setCategories } /> );
    })

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const value = 'Hola Mundo';

        wrapper.find('input').simulate( 'change', { target: { value } } );
        
        expect( wrapper.find('input').prop('value') ).toBe( value );
    });
    
    test('NO debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';

        // 1. Simular el imputChange
        wrapper.find('input').simulate( 'change', { target: { value } } );

        // 2. Simular el submit
        wrapper.find('form').simulate( 'submit', { preventDefault(){} });

        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // 4. El valor del input debe ser un string vacío
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
    
});