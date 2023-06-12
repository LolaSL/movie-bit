// import { render, screen, fireEvent } from "@testing-library/react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
// import dayjs from "dayjs";
// import ContentWrapper from "../contentWrapper/ContentWrapper";
// import Img from "../lazyLoadImage/Img";
// import PosterFallback from "../../assets/no-poster.png";
// import CircleRating from "../circleRating/CircleRating";
// import Genres from "../genres/Genres";
// import Carousel from "../carousel/Carousel";
// import React from 'react'

// jest.mock("react-redux", () => ({
//     ...jest.requireActual("react-redux"),
//     useSelector: jest.fn()
//   }));
  
// jest.mock("react-router-dom", () => ({
//     useNavigate: jest.fn(),
// }));
  
// describe("Carousel component", () => {
//     const mockData = [
//         {
//             id: 1,
//             title: "Movie 1",
//             poster_path: "poster1.jpg",
//             vote_average: 7.8,
//             genre_ids: [1, 2, 3],
//             release_date: "2023-06-01",
//         },
//         {
//             id: 2,
//             name: "TV Show 1",
//             poster_path: "poster2.jpg",
//             vote_average: 8.2,
//             genre_ids: [4, 5],
//             first_air_date: "2023-06-02",
//         },
//     ];
   

//     const mockLoading = false;

//     test("Carousel renders correctly", () => {
//         render(
//             <Carousel
//                 data={mockData}
//                 loading={mockLoading}
//                 endpoint="movies"
//                 title="Popular Movies" />
//         );
      
//         const carouselTitle = screen.getByText("Popular Movies");
//         expect(carouselTitle).toBeInTheDocument();
        
//     const leftNavButton = screen.getByTestId("carouselLeftNav");
//     const rightNavButton = screen.getByTestId("carouselRighttNav");
//     expect(leftNavButton).toBeInTheDocument();
//     expect(rightNavButton).toBeInTheDocument();

//     const carouselItems = screen.getByTestId("carouselItems");
//     expect(carouselItems).toBeInTheDocument();

//     const carouselItemElements = screen.getAllByTestId("carouselItem");
//     expect(carouselItemElements.length).toBe(mockData.length);
//   });
//     })
