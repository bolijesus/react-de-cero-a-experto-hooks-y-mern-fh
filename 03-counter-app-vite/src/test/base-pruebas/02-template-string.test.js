import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en el 02-template-string', () => {
    test('GetSaludo debe retornar "Hola Fernando"', () => {
        const name = "Fernando";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);

    })
})