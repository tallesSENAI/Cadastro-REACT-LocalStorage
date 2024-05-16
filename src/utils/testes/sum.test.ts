import {sum} from "../operations";


test ("soma dois valores", () => {
    expect(sum(3, 4)).toBe(7);
});

test ("os valores somados nao podem ser 7", () => {
    expect(sum(3, 5)).not.toBe(7);
});