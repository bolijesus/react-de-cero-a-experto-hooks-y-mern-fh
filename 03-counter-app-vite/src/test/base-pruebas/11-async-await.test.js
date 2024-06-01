import { getImagen } from "../../base-pruebas/11-async-await";


describe('pruebas en 11-async-await.js', () => {
    test('getImagen debe retornar un error si no tenemos API key', async () => {
        const resp = await getImagen();
        expect( resp ).toBe('No se encontró la imagen');
    })
})