import styled from "@emotion/styled";
import { Text } from "./Text";
import { TextStyles } from "../../constants/typography";
import { Colors } from "../../constants/colors";
import Link from "next/link";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Link href="/">
        <Text
          value="TRND."
          color={Colors.white}
          textClass={TextStyles.logoBold}
        />
      </Link>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100vw;
  min-height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.logoBlack};
`;
