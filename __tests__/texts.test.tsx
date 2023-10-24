import React from "react";
import { render, screen } from "@testing-library/react";
import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react"; // Import ChakraProvider
import { TextsComp } from "../src/components/pitcher/texts";

describe("TextsComp", () => {
  it("renders correctly", () => {
    render(
      <ChakraProvider theme={theme}>
        {" "}
        {/* Wrap your component with ChakraProvider */}
        <TextsComp Head="My Heading" Textss="My Text" size="2" col="blue" />
      </ChakraProvider>
    );

    expect(screen.getByText("My Heading")).toBeInTheDocument();
    expect(screen.getByText("My Text")).toBeInTheDocument();
  });

  it("applies custom props", () => {
    render(
      <ChakraProvider theme={theme}>
        <TextsComp
          Head="Custom Heading"
          Textss="Custom Text"
          size="3"
          col="red"
        />
      </ChakraProvider>
    );

    expect(screen.getByText("Custom Heading")).toBeInTheDocument();
    expect(screen.getByText("Custom Text")).toBeInTheDocument();

    // Use Chakra UI's utilities to check styles
    expect(screen.getByText("Custom Heading")).toHaveStyle({ color: "red" });
    expect(screen.getByText("Custom Heading")).toHaveStyle({
      fontSize: "3rem",
    });
  });
});
