import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";
import jest

// Mock the useSelector hook
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

// Mock the useFetch hook
jest.mock("../../hooks/useFetch", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("About", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the About component", () => {
    render(<About />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  });

  it("renders the background image when data is loaded", () => {
    const mockData = {
      results: [
        { backdrop_path: "/path/to/image1.jpg" },
        { backdrop_path: "/path/to/image2.jpg" },
      ],
    };
    const mockUrl = {
      backdrop: "https://example.com/backdrops/",
    };

    jest.spyOn(React, "useEffect").mockImplementation((effect) => effect());
    jest.spyOn(React, "useState").mockReturnValueOnce([
      "https://example.com/backdrops/path/to/image1.jpg",
      jest.fn(),
    ]);
    jest.spyOn(React, "useEffect").mockImplementation((effect) => effect());

    jest.requireMock("../../hooks/useFetch").default.mockReturnValueOnce({
      data: mockData,
      loading: false,
    });
    jest.requireMock("react-redux").useSelector.mockReturnValueOnce({
      url: mockUrl,
    });

    render(<About />);

    expect(screen.getByTestId("backdrop-image")).toBeInTheDocument();
    expect(screen.getByTestId("backdrop-image")).toHaveAttribute(
      "src",
      "https://example.com/backdrops/path/to/image1.jpg"
    );
  });

  it("does not render the background image when data is loading", () => {
    const mockUrl = {
      backdrop: "https://example.com/backdrops/",
    };

    jest.spyOn(React, "useEffect").mockImplementation((effect) => effect());
    jest.spyOn(React, "useState").mockReturnValueOnce([
      "https://example.com/backdrops/path/to/image1.jpg",
      jest.fn(),
    ]);
    jest.spyOn(React, "useEffect").mockImplementation((effect) => effect());

    jest.requireMock("../../hooks/useFetch").default.mockReturnValueOnce({
      data: null,
      loading: true,
    });
    jest.requireMock("react-redux").useSelector.mockReturnValueOnce({
      url: mockUrl,
    });

    render(<About />);

    expect(screen.queryByTestId("backdrop-image")).not.toBeInTheDocument();
  });
});