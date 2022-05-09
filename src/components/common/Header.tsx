import styled from "@emotion/styled";
import { Text } from "./Text";
import { Colors } from "../../constants/colors";
import { TextStyles } from "../../constants/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { LabeledIcon } from "./LabledIcon";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Text value="TRND." textClass={TextStyles.logoBold} />
      <TitlesWrapper>
        <Text
          value="Home"
          textClass={TextStyles.secondary}
          color={Colors.secondaryBlack}
          space="0px 12px 0px 0px"
        />
        <Text
          value="Shop"
          textClass={TextStyles.secondary}
          color={Colors.secondaryBlack}
          space="0px 12px 0px 0px"
        />
        <Text
          value="Contact"
          textClass={TextStyles.secondary}
          color={Colors.secondaryBlack}
          space="0px 12px 0px 0px"
        />
      </TitlesWrapper>
      <IconsWrapper>
        <LabeledIcon color={Colors.primary} icon={faUser} />
        <LabeledIcon color={Colors.primary} icon={faCartShopping} label="4" />
        <LabeledIcon color={Colors.primary} icon={faSearch} />
      </IconsWrapper>
    </HeaderWrapper>
  );
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
