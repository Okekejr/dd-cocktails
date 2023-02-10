import { FC } from "react";
import { Contacts } from "../contacts";
import { Footer } from "../footer";
import { Hero } from "../hero";
import { Partners } from "../partners";
import { PartnerData } from "../partners/partnerData";
import { Pitcher } from "../pitcher";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Pitcher />
      <Partners data={PartnerData} mb={{ base: 12, md: 8 }} />
      <Contacts />
      <Footer />
    </>
  );
};

export default HomePage;
