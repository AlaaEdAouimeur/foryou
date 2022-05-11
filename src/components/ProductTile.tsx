import styled from "@emotion/styled";
import { faCartPlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Colors } from "../constants/colors";
import { TextStyles } from "../constants/typography";
import { Product } from "../models/Product";
import { useCartProvider } from "../providers/cart";
import { LabeledIcon } from "./common/LabledIcon";
import { Text } from "./common/Text";

type Props = {
  product: Product;
};

export const ProductTile = ({ product }: Props) => {
  const { isItemInCart } = useCartProvider();
  const canAddToCart = !isItemInCart(product?.id);

  return (
    <Link href={`/products/${product.id}`}>
      <ProductTileWrapper>
        <img src={product.image} />
        <ProductInfoWrapper>
          <TextWrapper>
            <Text value={product.title} textClass={TextStyles.productTitle} />
            <Text
              value={product.category.toUpperCase()}
              textClass={TextStyles.productDescription}
              color={Colors.primary}
            />
          </TextWrapper>
          <PriceAndCartWrapper>
            <Text value={`$${product.price.toFixed(2)}`} />
            <LabeledIcon
              icon={canAddToCart ? faCartPlus : faCircleXmark}
              color={canAddToCart ? Colors.primary : Colors.remove}
              size={"2x"}
            />
          </PriceAndCartWrapper>
        </ProductInfoWrapper>
      </ProductTileWrapper>
    </Link>
  );
};

const ProductTileWrapper = styled.div`
  margin: 16px;
  display: flex;
  height: 200px;
  width: 600px;
  cursor: pointer;
  @media (max-width: 720px) {
    width: 100vw;
  }
  border-bottom: 1px solid #e6e6e6;
  > img {
    width: 168px;
    max-height: 168px;
    object-fit: contain;
  }
`;
const ProductInfoWrapper = styled.div`
  display: flex;
  margin-left: 16px;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
const TextWrapper = styled.div`
  flex: 3;
`;
const PriceAndCartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;
/**  <PriceAndCartWrapper>
          <Text value={`$${product.price.toFixed(2)}`} />
          <LabeledIcon icon={faCartPlus} color={Colors.primary} />
        </PriceAndCartWrapper> 
           <ProductInfoWrapper>
        <TextWrapper>
          <Text value={product.title} textClass={TextStyles.productTitle} />
          <CategoryChip category={product.category} />
        </TextWrapper>
        <PriceAndCartWrapper></PriceAndCartWrapper>
      </ProductInfoWrapper> */
