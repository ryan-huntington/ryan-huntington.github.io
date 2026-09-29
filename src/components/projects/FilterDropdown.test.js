import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterDropdown from "./FilterDropdown";

describe("FilterDropdown", () => {
  it("renders options alphabetically without mutating the options prop (AC-3)", async () => {
    const options = ["b", "a", "c"];
    const originalReference = options;

    render(
      <FilterDropdown
        options={options}
        selectedValues={[]}
        setSelectedValues={() => {}}
        placeholder="Test"
      />
    );

    expect(options).toBe(originalReference);
    expect(options).toEqual(["b", "a", "c"]);

    await act(async () => {
      await userEvent.click(screen.getByText("Test"));
    });

    const renderedOptions = screen
      .getAllByText(/^[abc]$/)
      .map((node) => node.textContent);

    expect(renderedOptions).toEqual(["a", "b", "c"]);
    expect(options).toEqual(["b", "a", "c"]);
  });
});
