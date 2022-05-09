import type { NextPage } from "next";
import styled from "@emotion/styled";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { HeroImage } from "../components/HeroImage";
import { Featured } from '../components/Featured';

const Home: NextPage = () => {
  return (
    <div className="main">
      <Header />
      <HeroImage
        cta="Check them out"
        title="Check our latest products"
        imgUrl="https://picsum.photos/1600/900"
      />
      <Featured />
      <Footer />
    </div>
  );
};

const HomeWrapper = styled.div`
  display: flex;
`;

export default Home;
