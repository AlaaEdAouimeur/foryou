import styled from '@emotion/styled';
import React from 'react';

import { Colors } from '../../constants/colors';

type Props = {
  show: boolean;
};

export function Loader({ show }: Props) {
  return <Container show={show}></Container>;
}

const Container = styled.div<{ show: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 3px white;
  border-left-color: ${Colors.white};
  position: absolute;
  opacity: 0;
  height: 20px;
  border-radius: 100px;
  width: 20px;
  transition: 0.3s;
  animation: rotation 1s linear infinite;

  ${(props) => (props.show ? 'opacity: 1' : 'opacity: 0')};
`;
