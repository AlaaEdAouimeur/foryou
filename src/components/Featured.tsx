import styled from "@emotion/styled";
import { TextStyles } from "../constants/typography";
import { Product } from "../models/Product";
import { Text } from "./common/Text";
import { ProductCard } from "./ProductCard";

type Props = {
  products: Product[];
};
export const Featured = ({ products }: Props) => {
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
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
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
  @media (max-width: 720px) {
    grid-template-columns: auto;
  }
  grid-row-gap: 16px;
  grid-column-gap: 64px;
  max-width: 688px;
`;
