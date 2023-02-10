import { FC } from "react";
import { Contacts } from "../contacts";
import { Hero } from "../hero";
import { Partners } from "../partners";
import { PartnerData } from "../partners/partnerData";
import { Pitcher } from "../pitcher";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Pitcher />
      <Partners data={PartnerData} mb={8} />
      <Contacts />
    </>
  );
};

export default HomePage;
