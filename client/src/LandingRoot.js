import React from "react";
import styled from "styled-components";

export const LandingRoot = ({}) => {
  return (
    <LandingRootRoot>
      <GrayFlexRow>
        <Element1>
          <Text1 />
          <ScreenShotAt
            src={`https://file.rendit.io/n/ZNKj5RSjbaklhBouhroM.png`}
          />
        </Element1>
        <FlexColumn>
          <Element2 onClick={() => window.open("/member", "_self")}>
            <WhiteRectangle />
            <Text2>Become a Member</Text2>
          </Element2>
          <Text3>Continue as Guest</Text3>
          <Element3>
            <Text4>Making Investing Comprehensive, and Fun.</Text4>
          </Element3>
        </FlexColumn>
      </GrayFlexRow>
    </LandingRootRoot>
  );
};

const LandingRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;
const GrayFlexRow = styled.div`
  gap: 26.91px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #7a8a7b;
`;
const Element1 = styled.div`
  width: 526.81px;
  height: 982px;
  position: relative;
`;
const Text1 = styled.div`
  width: 0;
  height: 129.89px;
  left: 241.74px;
  top: 220.82px;
  position: absolute;
  text-align: center;
`;
const ScreenShotAt = styled.img`
  width: 526.81px;
  height: 982px;
  position: absolute;
`;
const FlexColumn = styled.div`
  width: 948.08px;
  height: 886px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 48px 0px;
`;
const Element2 = styled.div`
  width: 948.08px;
  height: 77.95px;
  position: relative;
  margin: 0px 0px 0.05px 0px;
`;
const WhiteRectangle = styled.div`
  width: 326.12px;
  height: 57.15px;
  left: 606px;
  position: absolute;
  background-color: #fffdfd;
  border-radius: 10px;
`;
const Text2 = styled.div`
  width: 342.08px;
  height: 64.95px;
  left: 606px;
  top: 13px;
  position: absolute;
  font-size: 24px;
  font-family: Alata;
  text-align: center;
`;
const Text3 = styled.div`
  width: 262.26px;
  height: 46.76px;
  align-self: flex-end;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
  text-align: center;
  margin: 0px 39.82px 68.84px 0px;
`;
const Element3 = styled.div`
  width: 907.6561279296875px;
  height: 482.17px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0;
  padding: 0px 40.42529296875px 0px 0px;
`;
const Text4 = styled.div`
  width: 907.66px;
  height: 272.78px;
  color: #ffffff;
  font-size: 40px;
  font-family: Alata;
  text-align: center;
  align-self: center;
`;
