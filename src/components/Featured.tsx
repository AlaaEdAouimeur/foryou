import styled from "@emotion/styled";
import { TextStyles } from "../constants/typography";
import { Text } from "./common/Text";
import { ProductCard } from "./ProductCard";

export const Featured = () => {
  return (
    <FeaturedWrapper>
      <FeaturedTitle>
        <Text value="Featured Products" />
        <Text
          value="BESTSELLER PRODUCTS"
          space="12px"
          textClass={TextStyles.logoBold}
        />
      </FeaturedTitle>
      <ProductsWrapper>
        <ProductCard />
        <ProductCard />
      </ProductsWrapper>
    </FeaturedWrapper>
  );
};

const FeaturedWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px 32px 16px;
`;
const FeaturedTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductsWrapper = styled.div`
  display: grid;
  margin-top: 32px;
  grid-template-columns: auto auto;
  @media (max-width: 704px) {
    grid-template-columns: auto;
  }
  grid-row-gap: 16px;
  grid-column-gap: 32px;
  max-width: 688px;
`;
