import { render, screen} from "@testing-library/react";

import Carousel from "../carousel/Carousel";

import React from "react";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
  }));
  
jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
}));
  
describe("Carousel component", () => {
    // const mockData = [
    //     {
    //         id: 1,
    //         title: "Movie 1",
    //         poster_path: "poster1.jpg",
    //         vote_average: 7.8,
    //         genre_ids: [1, 2, 3],
    //         release_date: "2023-06-01",
    //     },
    //     {
    //         id: 2,
    //         name: "TV Show 1",
    //         poster_path: "poster2.jpg",
    //         vote_average: 8.2,
    //         genre_ids: [4, 5],
    //         first_air_date: "2023-06-02",
    //     },
    // ];
   

    // const mockLoading = false;

    test("Carousel renders correctly", () => {
        render(
            <Carousel
                data={mockData}
                loading={mockLoading}
                endpoint="movies"
                title="Popular Movies" />
        );
      
        const carouselTitle = screen.getByText("Popular Movies");
        expect(carouselTitle).toBeInTheDocument();
    })
})