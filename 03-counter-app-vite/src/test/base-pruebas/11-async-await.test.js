import { getImagen } from "../../base-pruebas/11-async-await";


describe('pruebas en 11-async-await.js', () => {
    test('getImagen debe retornar un URL de la imagen', async () => {
        const url = await getImagen();
        expect( typeof url).toBe('string');
    })
})