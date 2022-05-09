import styled from "@emotion/styled";
import { ComponentProps } from "react";
import { Colors } from "../../constants/colors";
import { TextStyles } from "../../constants/typography";

type Props = {
  value: string;
  textClass?: TextStyles;
  color?: string;
  center?: boolean;
  full?: boolean;
  space?: string;
} & ComponentProps<"div">;

export function Text({
  value,
  color = Colors.black,
  center = false,
  full = false,
  space,
  textClass = TextStyles.bodyRegular,
  ...props
}: Props) {

  return (
    <Container
      center={center}
      full={full}
      color={color}
      space={space}
      className={textClass}
      textClass={textClass}
      {...props}
    >
      {value}
    </Container>
  );
}

const Container = styled.div<{
  center: boolean;
  full: boolean;
  space?: string;
  textClass: string;
}>`
  text-align: ${(props) => (props.center ? "center" : "auto")};
  width: ${(props) => (props.full ? "100%" : "auto")};
  color: ${(props) => props.color};
  ${(props) => props.space ? `margin: ${props.space}` : ""};
  ${(props) => props.textClass};
`;
