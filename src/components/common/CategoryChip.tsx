import styled from "@emotion/styled";
import { Colors } from "../../constants/colors";
import { Text } from "./Text";

type Props = {
  category: string;
};

export const CategoryChip = ({ category }: Props) => {
  return (
    <CategoryChipWrapper>
      <Text value={category} color={Colors.white} />
    </CategoryChipWrapper>
  );
};
const CategoryChipWrapper = styled.div`
  padding: 8px;
  background-color: ${Colors.primary};
  width: 100%;
`;
