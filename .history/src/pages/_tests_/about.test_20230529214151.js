// import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import About from "../../pages/about/About.jsx";
// import { useSelector } from "react-redux";


// jest.mock("react-redux");

// describe("About", () => {
//   beforeEach(() => {
//     useSelector.mockClear();
//   });

//   it("renders the About component", () => {
//     useSelector.mockReturnValue({ url: {} });
//     render(<About />);
//     expect(screen.getByText("About")).toBeInTheDocument();
//     expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
//   });

//   it("renders the background image when data is loaded", () => {
//     const mockData = {
//       results: [
//         { backdrop_path: "/path/to/image1.jpg" },
//         { backdrop_path: "/path/to/image2.jpg" },
//       ],
//     };
//     const mockUrl = {
//       backdrop: "https://example.com/backdrops/",
//     };

//     useSelector.mockReturnValue({ url: mockUrl });
//     jest.spyOn(React, "useState").mockReturnValueOnce([
//       "https://example.com/backdrops/path/to/image1.jpg",
//       jest.fn(),
//     ]);
//     jest.spyOn(React, "useEffect").mockImplementationOnce((effect) => effect());

//     jest.mock("../../hooks/useFetch", () => ({
//       __esModule: true,
//       default: jest.fn(() => ({
//         data: mockData,
//         loading: false,
//       })),
//     }));

//     render(<About />);

//     expect(screen.getByTestId("backdrop-image")).toBeInTheDocument();
//     expect(screen.getByTestId("backdrop-image")).toHaveAttribute(
//       "src",
//       "https://example.com/backdrops/path/to/image1.jpg"
//     );
//   });

//   it("does not render the background image when data is loading", () => {
//     const mockUrl = {
//       backdrop: "https://example.com/backdrops/",
//     };

//     useSelector.mockReturnValue({ url: mockUrl });
//     jest.spyOn(React, "useState").mockReturnValueOnce([
//       "https://example.com/backdrops/path/to/image1.jpg",
//       jest.fn(),
//     ]);
//     jest.spyOn(React, "useEffect").mockImplementationOnce((effect) => effect());

//     jest.mock("../../hooks/useFetch", () => ({
//       __esModule: true,
//       default: jest.fn(() => ({
//         data: null,
//         loading: true,
//       })),
//     }));

//     render(<About />);

//     expect(screen.queryByTestId("backdrop-image")).not.toBeInTheDocument();
//   });
// });

test('should render about page', () => {
  render(<About />);
  const aboutElement = screen.get
})