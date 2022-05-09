import styled from "@emotion/styled";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Colors } from "../../constants/colors";
import { TextStyles } from "../../constants/typography";
import { Text } from "./Text";

type Props = {
  label?: string;
  icon: IconDefinition;
  color?: string;
};

export const LabeledIcon = ({ icon, label, color }: Props) => {
  return (
    <Wrapper>
      <FontAwesomeIcon color={color} icon={icon} />
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
  align-items: center;
  &:not(:last-child) {
    width: 60px;
  }
`;
