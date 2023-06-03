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

test('should render about component', () => {
  render(<About />);
  const aboutElement = screen.getByTestId('about-1');
  expect(aboutElement).toBeInTheDocument();
  expect(aboutElement).toHaveTextContent(' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
  aliquet, massa et laoreet ornare, augue nibh molestie tortor, ac
  varius dolor nisl sit amet orci. Duis condimentum magna tempor dui
  commodo cursus. Aenean et mollis mi. In nec volutpat leo. Cras est
  velit, commodo ut ex eu, varius eleifend odio. Sed ut convallis ex.
  Nunc nec lacinia lacus. Sed elit quam, consectetur et ultricies sit
  amet, bibendum sed lectus. Mauris in tortor in turpis imperdiet
  molestie. Vivamus feugiat neque at consectetur interdum. Interdum et
  malesuada fames ac ante ipsum primis in faucibus. Pellentesque id
  libero sollicitudin, lacinia purus eget, posuere magna. Suspendisse
  ornare venenatis auctor. Sed et velit eu tellus sollicitudin commodo.
  Nam rhoncus magna non tortor venenatis, sit amet tincidunt metus
  finibus. Phasellus ac orci sed magna sodales faucibus nec sed risus.
  Nulla molestie imperdiet ante. Curabitur non turpis a magna eleifend
  ullamcorper eu id velit. Integer molestie metus non varius molestie.
  Praesent id nibh pulvinar, bibendum neque sit amet.')
})