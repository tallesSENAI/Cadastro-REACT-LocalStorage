import {multiply} from "../operations";

test ("os valores multiplicados nao podem ser maior que 106", () => {
    expect(multiply(10, 10)).not.toBeGreaterThan(106);
});

test ("os valores multiplicados nao podem ser 7", () => {
    expect(multiply(3, 2)).toBeLessThan(7);
});