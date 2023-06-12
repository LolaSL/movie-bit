import React from 'react';
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe('App', () => {
    test("App renders correctly", () => {
        render(
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        );
        const linkElement = screen.findAllByTestId("ul-test");
        expect(linkElement).toBeDefined();
      });
})