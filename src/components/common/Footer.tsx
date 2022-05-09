import styled from "@emotion/styled";
import { Text } from "./Text";
import { TextStyles } from "../../constants/typography";
import { Colors } from "../../constants/colors";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Text
        value="TRND."
        color={Colors.white}
        textClass={TextStyles.logoBold}
      />
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100vw;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.logoBlack}
`;
