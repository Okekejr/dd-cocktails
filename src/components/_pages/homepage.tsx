import { FC } from "react";
import { Hero } from "../hero";
import { Pitcher } from "../pitcher";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Pitcher />
    </>
  );
};

export default HomePage;
