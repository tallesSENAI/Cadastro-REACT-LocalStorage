import {divide} from "../operations";

test ("o resultado dos valores divididos nao pode ser 3", () => {
    expect(divide(10, 5)).not.toBe(3);
});

test ("o resultado dos valores divididos devem ser maiores que 8", () => {
    expect(divide(100, 4)).toBeGreaterThan(8);
});