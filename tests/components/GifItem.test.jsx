import { render , screen} from '@testing-library/react';
import { GifItem } from '../../src/components';


describe('Pruebas del componente GifItem', () => { 
    
    const title = 'Kimetsu no yaiba';
    const url   = `https://kimetsu-no-yaiba.com/kimetsu.jpg`;

    test('Evaluar el screenshop', () => { 
        const { container } = render( <GifItem title = {title} url = {url}/>);
        expect( container ).toMatchSnapshot();
     });

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render( <GifItem title = {title} url = {url}/>);
        // screen.debug();

        // expect( screen.getByRole('img').src).toBe( url );
        // console.log(screen.getByRole('img').src);

        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );

      });

      test('debe de mostrar el titulo en el componente', () => { 
        
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();

       });
 });