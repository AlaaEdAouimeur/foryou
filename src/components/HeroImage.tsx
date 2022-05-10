import styled from "@emotion/styled";
import { Colors } from "../constants/colors";
import { TextStyles } from "../constants/typography";
import { Text } from "../components/common/Text";
import { Button } from "./common/Button";
import { ButtonStyles } from "../constants/buttons";
import { useRouter } from "next/router";

type Props = {
  imgUrl: string;
  cta: string;
  title: string;
};

export const HeroImage = ({ imgUrl, cta, title }: Props) => {
  const router = useRouter();
  return (
    <HeroImageWrapper imgUrl={imgUrl}>
      <InfoWrapper>
        <Text
          value={title}
          textClass={TextStyles.logoBold}
          color={Colors.white}
          space="0px 0px 16px 0px"
        />
        <Button
          value={cta}
          buttonClass={ButtonStyles.cta}
          onClick={() => router.push("/products")}
        />
      </InfoWrapper>
    </HeroImageWrapper>
  );
};

const HeroImageWrapper = styled.div<{ imgUrl: string }>`
  width: 100vw;
  min-height: 400px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  overflow: hidden;
`;
const InfoWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
