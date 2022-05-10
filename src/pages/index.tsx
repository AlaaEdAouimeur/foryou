import type { NextPage } from "next";
import styled from "@emotion/styled";
import { HeroImage } from "../components/HeroImage";
import { Featured } from "../components/Featured";
import { useProducts } from "../hooks/useProducts";
import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { LoadingPlaceholder } from '../components/common/LoadingPlaceholder';

const Home: NextPage = () => {
  const { fetchProducts } = useProducts();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchAndUpdateProducts = async () => {
    setIsLoading(true);
    const res = await fetchProducts();
    if (res) {
      setFeaturedProducts(res);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAndUpdateProducts();
  }, []);

  if (isLoading) {
  return <LoadingPlaceholder />;
}
  return (
    <>
      <HeroImage
        cta="Check them out"
        title="Check our latest products"
        imgUrl="https://picsum.photos/1600/900"
      />
      <Featured products={featuredProducts || []} />
    </>
  );
};

const HomeWrapper = styled.div`
  display: flex;
`;

export default Home;
