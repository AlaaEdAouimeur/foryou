import styled from "@emotion/styled";
import { TextStyles } from "../../constants/typography";
import { Text } from "./Text";

export const ErrorPlaceholder = () => {
  return (
    <ErrorPlaceholderWrapper>
      <Text value="Something went wrong" textClass={TextStyles.productTitle} />
    </ErrorPlaceholderWrapper>
  );
};
const ErrorPlaceholderWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
