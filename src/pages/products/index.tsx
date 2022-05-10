import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import { ErrorPlaceholder } from "../../components/common/ErrorPlaceholder";
import { LoadingPlaceholder } from "../../components/common/LoadingPlaceholder";
import { Text } from "../../components/common/Text";
import { ProductTile } from "../../components/ProductTile";
import { Colors } from "../../constants/colors";
import { TextStyles } from "../../constants/typography";
import { useProducts } from "../../hooks/useProducts";
import { useScroll } from "../../hooks/useScroll";
import { Product } from "../../models/Product";

const ProductsList = () => {
  const { fetchProducts } = useProducts();
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [currentLimit, setCurrentLimit] = useState(10);
  const [isLimitReached, setIsLimitReached] = useState(false);

  const handleScroll = () => {
    console.log(isLimitReached);
    if (!isLoading && !isLimitReached) {
      setCurrentLimit(currentLimit + 10);
    }
  };
  useScroll(handleScroll);

  const fetchAndUpdateProducts = async (limit: number) => {
    setIsLoading(true);
    const res = await fetchProducts(limit);
    if (res) {
      if (res.length === products?.length) {
        setIsLimitReached(true);
      } else {
        setProducts(res);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAndUpdateProducts(currentLimit);
  }, [currentLimit]);

  if (isLoading && !products) {
    return <LoadingPlaceholder />;
  } else if (!isLoading && !products) {
    return <ErrorPlaceholder />;
  }

  return (
    <>
      <Text
        value="All products"
        textClass={TextStyles.logoBold}
        space="64px 0px 0px 16px"
      />
      <ProductsListWrapper>
        {products?.map((product, index) => (
          <ProductTile key={index} product={product} />
        ))}
        {isLoading && products && (
          <Rings color={Colors.primary} height={50} width={50} />
        )}
      </ProductsListWrapper>
    </>
  );
};
const ProductsListWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    align-items: center;
  }
`;
export default ProductsList;
