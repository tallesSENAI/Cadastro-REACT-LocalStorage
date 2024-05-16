import {equal} from "../operations";

test ("um valor ser igual ao outro precisa ser verdadeiro", () => {
    expect(equal(5, 5)).toBe(5);
});

test ("um valor nao deve ser igual ao outro", () => {
    expect(equal(7, 2)).not.toBe(2);
});