import styled from "@emotion/styled";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextStyles } from "../../constants/typography";
import { Text } from "../../components/common/Text";
import { Colors } from "../../constants/colors";
import { MobileNavBarItem } from "./MobileNavBarItem";
import { useState } from "react";

export const MobileHeader = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  return (
    <>
      <MobileHeaderWrapper>
        <Text value="TRND." textClass={TextStyles.logoBold} />
        <div>
          <span onClick={() => setIsNavBarVisible(!isNavBarVisible)}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </MobileHeaderWrapper>
      <HeaderNavBars isNavBarVisible={isNavBarVisible}>
        <MobileNavBarItem title="Home" href="" />
        <MobileNavBarItem title="Products" href="" />
        <MobileNavBarItem title="Contact" href="" />
      </HeaderNavBars>
    </>
  );
};

const MobileHeaderWrapper = styled.div`
  display: flex;
  width: 100vw;
  padding: 8px 16px 8px 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  z-index: 1;
`;
const HeaderNavBars = styled.div<{ isNavBarVisible: boolean }>`
  height: 0px;
  z-index: 0;
  transform: ${({ isNavBarVisible }) =>
    isNavBarVisible ? "translateY(0px)" : "translateY(-440px)"};
  transition: transform 400ms ease 0s;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${Colors.white};
  width: 100vw;
`;
