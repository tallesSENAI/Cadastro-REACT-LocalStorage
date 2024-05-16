import {isNumber} from "./isNumber";

test ("a entrada não deve ser string", () => {
    expect(isNumber).not.toBe(".");
});

test ("a entrada deve ser igual -75", () => {
    expect(isNumber).toBeGreaterThan(10);
});