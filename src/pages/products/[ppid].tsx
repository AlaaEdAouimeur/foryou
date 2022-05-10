import type { NextPage } from "next";
import styled from "@emotion/styled";
import { TextStyles } from "../../constants/typography";
import { Text } from "../../components/common/Text";
import { Product } from "../../models/Product";
import { useRouter } from "next/router";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { LabeledIcon } from "../../components/common/LabledIcon";
import { Colors } from "../../constants/colors";
import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { LoadingPlaceholder } from "../../components/common/LoadingPlaceholder";
import { ErrorPlaceholder } from '../../components/common/ErrorPlaceholder';

const ProductDetails: NextPage = () => {
  const { fetchProduct } = useProducts();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { ppid } = router.query;

  const fetchAndUpdateProduct = async () => {
    setIsLoading(true);
    const productId = Number(ppid);
    const res = await fetchProduct(productId);
    if (res) {
      setProduct(res);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (ppid) {
      fetchAndUpdateProduct();
    }
  }, [ppid]);

  if (isLoading) {
    return <LoadingPlaceholder />;
  } else if (!isLoading && product) {
    return (
      <PageWrapper>
        <Text
          value={product.title}
          textClass={TextStyles.productDetailsTitle}
        />
        <Text
          value={`Category: ${product.category}`}
          textClass={TextStyles.productDescription}
        />
        <ProductWrapper>
          <img src={product.image} />
          <InfoWrapper>
            <Text
              value={product.description}
              textClass={TextStyles.productDetailsDescription}
            />
            <PriceAndCartWrapper>
              <Text
                value={`$${product.price}`}
                textClass={TextStyles.productTitle}
              />
              <LabeledIcon
                icon={faCartPlus}
                color={Colors.primary}
                size={"2x"}
              />
            </PriceAndCartWrapper>
          </InfoWrapper>
        </ProductWrapper>
      </PageWrapper>
    );
  } else return <ErrorPlaceholder/>;
};

const PageWrapper = styled.div`
  flex: 1;
  padding: 32px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 800px;
  margin-top: 16px;
  border: 1px solid #686868;
  > img {
    width: 500px;
    max-height: 500px;
    object-fit: contain;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: space-between;
`;
const PriceAndCartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export default ProductDetails;
