import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import  MovieCard  from "../movieCard/MovieCard";
import React from "react";

// Mock the dependencies
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("MovieCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders movie card with correct data", () => {
    // Mock the useSelector hook return value
    useSelector.arguments({
      url: { poster: "https://example.com/posters/" },
    });

    const data = {
      id: 1,
      title: "Movie Title",
      poster_path: "/poster.jpg",
      vote_average: 7.5,
      genre_ids: [1, 2, 3],
      release_date: "2022-01-01",
      media_type: "movie",
    };

    render(<MovieCard data={data} fromSearch={false} mediaType="movie" />);

    // Assert that the movie card elements are rendered correctly
    expect(screen.getByText("Movie Title")).toBeInTheDocument();
    expect(screen.getByText("Jan 1, 2022")).toBeInTheDocument();
    expect(screen.getByAltText("Movie Poster")).toBeInTheDocument();

    // Assert that CircleRating and Genres components are rendered when not from search
    expect(screen.getByTestId("circle-rating")).toBeInTheDocument();
    expect(screen.getByTestId("genres")).toBeInTheDocument();

    // Assert that useNavigate is called with the correct URL on card click
    const navigateMock = useNavigate();
    fireEvent.click(screen.getByTestId("movie-card"));
    expect(navigateMock).toHaveBeenCalledWith("/movie/1");
  });

  it("renders movie card without CircleRating and Genres when from search", () => {
    useSelector.mockReturnValue({
      url: { poster: "https://example.com/posters/" },
    });

    const data = {
      id: 1,
      title: "Movie Title",
      poster_path: "/poster.jpg",
      vote_average: 7.5,
      genre_ids: [1, 2, 3],
      release_date: "2022-01-01",
      media_type: "movie",
    };

    render(<MovieCard data={data} fromSearch={true} mediaType="movie" />);

    expect(screen.getByTestId("circle-rating")).not.toBeInTheDocument();
    expect(screen.getByTestId("genres")).not.toBeInTheDocument();
  });
});
