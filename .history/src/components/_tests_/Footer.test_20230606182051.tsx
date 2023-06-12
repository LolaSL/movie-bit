// import { render, screen } from "@testing-library/react";
// import { SocialIcon } from "react-social-icons";
// import ContentWrapper from "../contentWrapper/ContentWrapper";
// import React from "react";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// // import Footer from "../footer/Footer";

// describe("list", () => {
//   test("list renders correctly", () => {
//     render(
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//     );
//     const linkElement = screen.findAllByTestId("ul-test");
//     expect(linkElement).toBeDefined();
//   });

//   test("paragraph renders correctly", () => {
//     render(
//       <div>
//         <p></p>
//       </div>
//     );
//     const textElement = screen.findAllByTestId("infoText-test");
//     expect(textElement).toBeDefined();
//   });

//   test("renders correctly", () => {
//     render(
//       <div>
//         <SocialIcon>
//           <FaLinkedin />
//         </SocialIcon>
//         <SocialIcon>
//           <FaGithub />
//         </SocialIcon>
//       </div>
//     );
//     const textElement = screen.findAllByTestId("socialIcons-test");
//     expect(textElement).toBeDefined();
//   });

//   test("year renders correctly", () => {
  // const currentYear = new Date().getFullYear();
//     render(<div>&copy; {new Date().getFullYear()} Copyright: MOVIE BIT</div>);
// const copyrightElement = screen.getByTestId("copyright-test");
// expect(copyrightElement.textContent).toContain(currentYear);;
//   });

//   test("year renders correctly", () => {
//     render(<div>&copy; {new Date().getFullYear()} Copyright: MOVIE BIT</div>);
//     global.Date = Date;
//     const textElement = screen.findByDisplayValue("2023");
//     expect(textElement).toBeDefined();
//   });
// });

// describe("Component", () => {
//   test("Component renders correctly", () => {
//     render(
//       <footer>
//         <ContentWrapper>
//           <ul>
//             <li></li>
//             <li></li>
//             <li></li>
//           </ul>
//           <div>
//             <p></p>
//           </div>
//           <div>
//             <SocialIcon>
//               <FaLinkedin />
//             </SocialIcon>
//             <SocialIcon>
//               <FaGithub />
//             </SocialIcon>
//           </div>
//           <div></div>
//         </ContentWrapper>
//       </footer>
//     );
//     const textElement = screen.findAllByTestId("footer-test");
//     expect(textElement).toBeDefined();
//   });
// });

import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "../footer/Footer";

describe("Footer Component", () => {
  test("renders list correctly", () => {
    render(
     <Footer></Footer>
    );
    const listElements = screen.queryAllByTestId("ul-test");
    expect(listElements.length).toBe(3);
  });

  test("renders paragraph correctly", () => {
    render(
      <Footer />
    );
    const paragraphElement = screen.getByTestId("infoText-test");
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders social icons correctly", () => {
    render(
      <footer></footer>
    );
    const socialIcons = screen.queryAllByTestId("socialIcons-test");
    expect(socialIcons.length).toBe(2);
  });

  test("renders current year correctly", () => {
    const currentYear = new Date().getFullYear();
    render(
      <footer></footer>
    );
    const copyrightElement = screen.getByTestId("copyright-test");
    expect(copyrightElement.textContent).toContain(currentYear);
  });

  test("renders Footer component correctly", () => {
    render(
      <footer></footer>
    );
    const footerElement = screen.getByTestId("footer-test");
    expect(footerElement).toBeInTheDocument();
  });
});
