import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Projects from "./Projects";
import projectsData from "../assets/projectsData.json";

const ALPHABETICAL_NAMES = [
  "ALSRS",
  "Entity Based Game Prototype",
  "JackUDP",
  "MegEx",
  "Personal Finance Assistant",
  "Pirate Adventure",
  "Power Rankings",
  "RoadTripper",
];

describe("Projects", () => {
  it("renders the project grid in alphabetical order by name (AC-1)", () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    const names = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);

    expect(names).toEqual(ALPHABETICAL_NAMES);
  });

  it("does not mutate the projectsData module array or its object identities (AC-2)", () => {
    const before = JSON.stringify(projectsData);

    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    const after = JSON.stringify(projectsData);

    expect(after).toEqual(before);
  });
});
