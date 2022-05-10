import styled from "@emotion/styled";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Colors } from "../constants/colors";
import { TextStyles } from "../constants/typography";
import { Product } from "../models/Product";
import { LabeledIcon } from "./common/LabledIcon";
import { Text } from "./common/Text";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <ProductCardWrapper>
      <Link href={`/products/${product.id}`}>
        <img src={product.image} />
      </Link>
      <ProductInfoWrapper>
        <Text value={product.title} textClass={TextStyles.productTitle} />
      </ProductInfoWrapper>
      <PriceAndCartWrapper>
        <Text value={`$${product.price.toFixed(2)}`} />
        <LabeledIcon
          icon={faCartPlus}
          color={Colors.primary}
          onClick={() => console.log("sda")}
        />
      </PriceAndCartWrapper>
    </ProductCardWrapper>
  );
};

const ProductCardWrapper = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: flex-start;
  height: 615px;
  width: 240px;
  > img {
    width: 100%;
    height: 427px;
  }
`;
const ProductInfoWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

const PriceAndCartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 8px 32px 8px 32px;
`;
