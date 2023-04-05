const sorting = require("../../src/app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });

  it("If books' names are equal", () => {
    const input = [
      "Гарри Поттер",
      "Гарри Поттер"
    ];

    const expected = [
      "Гарри Поттер",
      "Гарри Поттер"
    ];

    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });

  it("If input array is empty", () => {
    const input = [];

    const expected = [];

    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });
});
