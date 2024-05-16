import { calculate } from "./calculate";

const result = calculate("-", "7", "3");
const result1 = calculate("+", "35", "35");
const result2 = calculate("/", "90", "9");

test ("os valores subtraidos tem que ser maior que 3", () => {
    expect(result).toBeGreaterThan(3);
});

test ("os valores somados tem que ser 70", () => {
    expect(result1).toBeGreaterThan(70);
});

test ("os valores divididos tem que ser maior que 7", () => {
    expect(result2).toBeGreaterThan(7);
});