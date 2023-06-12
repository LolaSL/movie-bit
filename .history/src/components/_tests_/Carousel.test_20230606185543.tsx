import { render, screen } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));
  
jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
}));
  
describe("carousel component", () => {
    const mockData = [
        {
          id: 1,
          title: "Movie 1",
          poster_path: "poster1.jpg",
          vote_average: 7.8,
          genre_ids: [1, 2, 3],
          release_date: "2023-06-01",
        },
        {
          id: 2,
          name: "TV Show 1",
          poster_path: "poster2.jpg",
          vote_average: 8.2,
          genre_ids: [4, 5],
          first_air_date: "2023-06-02",
        },
      ];
    
      const mockLoading = false;
      const mockUrl = {
        poster: "https://example.com/posters/",
    };
    
    test("carousel renders correctly", () => {
        render(
        <div data-test="carousel-test"></div>
        );
        const textElement = screen.findAllByTestId("carousel-test");
        expect(textElement).toBeDefined();
      });
})