import {allClear} from "../operations";

test ("o retorno de allClear nao poe ser nulo", () => {
    expect(allClear()).not.toBeNull();
});

test ("o retorno de allClear deve ser 0", () => {
    expect(allClear()).toBe(0);
});