import styled from "@emotion/styled";
import { Colors } from "../../constants/colors";
import { TextStyles } from "../../constants/typography";
import { Text } from "./Text";

type Props = {
  title: string;
  href: string;
};

export const MobileNavBarItem = ({ title, href }: Props) => {
  return (
    <MobileNavBarItemWrapper href={href}>
      <Text value={title} textClass={TextStyles.productTitle} />
    </MobileNavBarItemWrapper>
  );
};
const MobileNavBarItemWrapper = styled.a`
  padding: 16px 32px 16px 32px;
  background-color: ${Colors.white};
  text-align: center;
  text-decoration: none;
`;
