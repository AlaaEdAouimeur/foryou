import styled from "@emotion/styled";
import React, { ComponentProps } from "react";

import { ButtonStyles } from "../../constants/buttons";
import { Loader } from "./Loader";

type Props = {
  show?: boolean;
  value: string;
  icon?: string;
  type?: "button" | "reset" | "submit";
  buttonClass: ButtonStyles;
  space?: string;
  center?: boolean;
  full?: boolean;
  inline?: boolean;
  loading?: boolean;
  disabled?: boolean;
} & ComponentProps<"div">;

export function Button({
  show = true,
  value,
  icon,
  type = "button",
  color,
  full,
  space,
  inline = false,
  loading = false,
  disabled = false,
  buttonClass = ButtonStyles.blank,
  ...props
}: Props) {
  if (!show) {
    return <></>;
  }

  return (
    <Container {...props} space={space} full={full} inline={inline}>
      <CustomButton
        icon={icon}
        type={type}
        color={color}
        disabled={disabled || loading}
        $loading={loading}
        full={full}
        title={value}
        className={`${buttonClass} ${disabled ? "disabled" : ""}`}
      >
        <span>{value}</span>
        <Loader show={loading} />
      </CustomButton>
    </Container>
  );
}

const Container = styled.div<{
  space?: string;
  full?: boolean;
  inline?: boolean;
}>`
  margin: ${(props) => (props.space ? props.space : "")};
  width: ${(props) => (props.full ? "100%" : "auto")};
  display: ${(props) => (props.inline ? "inline-block" : "block")};
`;

const CustomButton = styled.button<{
  full?: boolean;
  $loading: boolean;
  disabled?: boolean;
  icon?: string;
  color?: string;
}>`
  width: ${(props) => (props.full ? "100%" : "auto")};
  ${(props) => (props.$loading ? "color: transparent" : "")};
  cursor: pointer;
  ${(props) => (props.color ? "color: " + props.color + "" : "")};
  &:before {
    ${(props) =>
      props.icon && !props.$loading
        ? "mask: url(" + props.icon + ") no-repeat center;"
        : ""};
  }
`;
