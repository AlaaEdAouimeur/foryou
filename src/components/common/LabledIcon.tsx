import styled from "@emotion/styled";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Colors } from "../../constants/colors";
import { TextStyles } from "../../constants/typography";
import { Text } from "./Text";

type Props = {
  label?: string;
  icon: IconDefinition;
  color?: string;
  size?: SizeProp;
  onClick?: () => void;
};

export const LabeledIcon = ({ icon, label, color, size, onClick }: Props) => {
  return (
    <Wrapper onClick={onClick}>
      <FontAwesomeIcon size={size} color={color} icon={icon} />
      {label && (
        <Text
          value={label}
          space="0px 0px 0px 8px"
          textClass={TextStyles.bodyRegular}
          color={Colors.primary}
        />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  &:not(:last-child) {
    width: 60px;
  }
`;
