
describe('Pruebas en <DemoComponent>', () => { 
    test("Esta prueba no debe falar", ()=>{
        // 1.inicializacion
        const message1 = 'hola mundo';
        // 2.etimulo
        const message2 = message1.trim();
        // 3.comportamineto
        expect(message1).toBe(message2)
        
    })
 })

  