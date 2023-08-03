import { getGifs } from "../../src/helpers/getGif";

describe('{Pruebas de getGif}', () => { 
    
    test('debe retornar un arreglo de gifs', async () => { 
     
        const gifs = await getGifs('Kimetsu no yaiba');
        // console.log(gifs);
        //evaluamos que sea mayor que 0
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ), 
            url: expect.any( String )
        });

     });
 });