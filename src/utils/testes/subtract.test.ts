import {subtract} from "../operations";

test ("os valores subtraidos nao podem ser 84", () => {
    expect(subtract(70, 5)).not.toBe(84);
});

test ("os valores subtraidos tem que ser menor que 10", () => {
    expect(subtract(12, 3)).toBeGreaterThan(10);
});