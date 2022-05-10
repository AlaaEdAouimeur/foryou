import styled from "@emotion/styled";
import { CategoryChip } from "./common/CategoryChip";

type Props = {
  categories: string[];
};

export const CategoriesTile = ({ categories }: Props) => {
  return (
    <CategoriesTileWrapper>
      {categories.map((category, index) => (
        <CategoryChip key={index} category={category} />
      ))}
    </CategoriesTileWrapper>
  );
};

const CategoriesTileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
