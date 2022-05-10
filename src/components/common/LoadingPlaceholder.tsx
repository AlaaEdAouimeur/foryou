import styled from "@emotion/styled";
import { Rings } from 'react-loader-spinner'
import { Colors } from '../../constants/colors';

export const LoadingPlaceholder = () => {
  return (
    <LoadingPlaceholderWrapper>
      <Rings color={Colors.primary} height={200} width={200} />
    </LoadingPlaceholderWrapper>
  );
};
const LoadingPlaceholderWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
