import styled from "@emotion/styled";
import { Text } from "./Text";
import { Colors } from "../../constants/colors";
import { TextStyles } from "../../constants/typography";
import {
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { LabeledIcon } from "./LabledIcon";
import useIsDevice from "../../hooks/useIsDevice";
import { MobileHeader } from "./MobileHeader";
import Link from "next/link";
import { useCartProvider } from "../../providers/cart";

type Props = {
  href: string;
  title: string;
};

const NavTitle = ({ href, title }: Props) => {
  return (
    <Link href={href}>
      <Text
        value={title}
        textClass={TextStyles.secondary}
        color={Colors.secondaryBlack}
        space="0px 12px 0px 0px"
        isClickable
      />
    </Link>
  );
};

export const Header = () => {
  const { isMobile } = useIsDevice();
  const { cart } = useCartProvider();

  if (isMobile) {
    return <MobileHeader />;
  } else {
    return (
      <HeaderWrapper>
        <Link href="/">
          <Text value="TRND." textClass={TextStyles.logoBold} isClickable />
        </Link>
        <TitlesWrapper>
          <NavTitle href="/" title="Home" />
          <NavTitle href="/products" title="Shop" />
          <NavTitle href="/" title="Contact" />
        </TitlesWrapper>
        <IconsWrapper>
          <LabeledIcon color={Colors.primary} icon={faUser} />
          <LabeledIcon color={Colors.primary} icon={faCartShopping} label={`${cart.length}`} />
          <LabeledIcon color={Colors.primary} icon={faSearch} />
        </IconsWrapper>
      </HeaderWrapper>
    );
  }
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 74px;
  padding: 8px 16px 8px 16px;
`;
const TitlesWrapper = styled.div`
  display: flex;
`;

const IconsWrapper = styled.div`
  display: flex;
`;
