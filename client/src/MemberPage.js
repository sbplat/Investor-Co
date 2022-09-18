import React from "react";
import styled from "styled-components";

export const MemberPage = ({}) => {
  return (
    <RectangleRootRoot>
      <Text1>Becoming a Member</Text1>
      <FlexRow>
        <FlexColumn>
          <Element1>
            <WhiteRectangle />
            <Text2>Sign up</Text2>
          </Element1>
          <WhiteFlexRow>
            <Text3>Create an Account</Text3>
          </WhiteFlexRow>
          <WhiteRectangle1>
            <Text4>Sign up using Google</Text4>
            <GoogleChrome
              src={`https://file.rendit.io/n/wMSYwWeV0vfyQQMiJUVo.png`}
            />
          </WhiteRectangle1>
        </FlexColumn>
        <Line src={`https://file.rendit.io/n/KLnKnH5qnhLWd67KRMFj.svg`} />
        <FlexColumn1>
          <Element2>
            <WhiteRectangle />
            <Text5 onClick={() => window.open("/dashboard", "_self")}>Log In</Text5>
            <Text6>Email</Text6>
          </Element2>
          <TimberwolfRectangle />
          <Text7>Password</Text7>
          <TimberwolfRectangle1 />
        </FlexColumn1>
      </FlexRow>
    </RectangleRootRoot>
  );
};

const WhiteRectangle = styled.div`
  width: 326.12px;
  height: 56.85px;
  left: 31.93px;
  position: absolute;
  background-color: #fffdfd;
  border-radius: 10px;
`;
const RectangleRootRoot = styled.div`
  width: 1199.57px;
  height: 982px;
  gap: 98.19px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/WRTOQpTTV0BuRID2e9Vz.svg");
  padding: 0px 155.08px 0px 157.36px;
`;
const Text1 = styled.div`
  width: 777.67px;
  height: 129.21px;
  color: #ffffff;
  font-size: 64px;
  font-family: Alata;
  text-align: center;
  margin: 0px 177.88px 0px 0px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
`;
const FlexColumn = styled.div`
  height: 522px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0.01px 0px;
  margin: 0px 209.77px 0px 0px;
`;
const Element1 = styled.div`
  width: 383.13px;
  height: 77.53px;
  position: relative;
  align-self: stretch;
  margin: 0px 0px 98.2px 0px;
`;
const Text2 = styled.div`
  width: 371.73px;
  height: 67.19px;
  top: 10.34px;
  position: absolute;
  font-size: 29px;
  font-family: Alata;
  text-align: center;
`;
const WhiteFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  backdrop-filter: blur(0px);
  border-radius: 20px;
  padding: 25.84px 72.98px 25.84px 59.29px;
  margin: 0px 0px 67.22px 0px;
`;
const Text3 = styled.div`
  width: 244.02px;
  height: 46.52px;
  font-size: 29px;
  font-family: Alata;
  text-align: center;
`;
const WhiteRectangle1 = styled.div`
  width: 376.29px;
  height: 98.2px;
  position: relative;
  background-color: #ffffff;
  backdrop-filter: blur(0px);
  border-radius: 20px;
  margin: 0px 0.2px 0px 0px;
`;
const Text4 = styled.div`
  width: 244.02px;
  height: 46.52px;
  left: 20px;
  top: 9px;
  position: absolute;
  font-size: 29px;
  font-family: Alata;
  text-align: center;
`;
const GoogleChrome = styled.img`
  width: 68.42px;
  height: 74.94px;
  left: 264px;
  top: 9px;
  position: absolute;
`;
const Line = styled.img`
  width: 3.29px;
  height: 522.02px;
  align-self: center;
  margin: 0px 213.41px 0px 0px;
`;
const FlexColumn1 = styled.div`
  height: 522px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0.01px 0px;
`;
const Element2 = styled.div`
  width: 389.97px;
  height: 227.41px;
  position: relative;
  align-self: stretch;
  margin: 0px 0px 5.17px 0px;
`;
const Text5 = styled.div`
  width: 389.97px;
  height: 217.07px;
  top: 10.34px;
  position: absolute;
  font-size: 29px;
  font-family: Alata;
  text-align: center;
`;
const Text6 = styled.div`
  width: 139.11px;
  height: 62.02px;
  left: 34.21px;
  top: 152.47px;
  position: absolute;
  color: #ffffff;
  font-size: 29px;
  font-family: Alata;
  text-align: center;
`;
const TimberwolfRectangle = styled.div`
  width: 353.48px;
  height: 41.35px;
  background-color: #d9d9d9;
  backdrop-filter: blur(0px);
  border-radius: 20px;
  margin: 0px 2.28px 54.27px 0px;
`;
const Text7 = styled.div`
  width: 127.71px;
  height: 62.02px;
  align-self: flex-start;
  color: #ffffff;
  font-size: 29px;
  font-family: Alata;
  text-align: center;
  margin: 0px 0px 15.51px 38.77px;
`;
const TimberwolfRectangle1 = styled.div`
  width: 353.48px;
  height: 41.35px;
  background-color: #d9d9d9;
  backdrop-filter: blur(0px);
  border-radius: 20px;
  margin: 0px 2.28px 0px 0px;
`;
