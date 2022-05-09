import styled from "@emotion/styled";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Colors } from '../constants/colors';
import { TextStyles } from "../constants/typography";
import { LabeledIcon } from "./common/LabledIcon";
import { Text } from "./common/Text";

export const ProductCard = () => {
  return (
    <ProductCardWrapper>
      <img src="https://picsum.photos/900/1600" />
      <ProductInfoWrapper>
        <Text value="Varsity Jacket" textClass={TextStyles.productTitle} />
        <Text
          value="Brand new styled with extra comfort jacket to look good Brand new styled with extra comfort jacket to look good Brand new styled with extra comfort jacket to look good Brand new styled with extra comfort jacket to look good "
          textClass={TextStyles.productDescription}
        />
      </ProductInfoWrapper>
      <PriceAndCartWrapper>
        <Text value="$23.50" />
        <LabeledIcon icon={faCartPlus} color={Colors.primary}/>
      </PriceAndCartWrapper>
    </ProductCardWrapper>
  );
};

const ProductCardWrapper = styled.div`
  display: flex;
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
  height: 190px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

const PriceAndCartWrapper = styled.div`
  display: flex;
  flex-direction: row ;
  justify-content: space-between;
  width: 100%;
  padding: 8px 32px 8px 32px;
`;
