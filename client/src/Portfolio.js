import React from "react";
import styled from "styled-components";

export const PortfolioPage = ({}) => {
  return (
    <RectangleRootRoot>
      <FlexRow>
        <Text1>Your Portfolio</Text1>
        <ScreenShotAt
          src={`https://file.rendit.io/n/cdMGRhF17PYn1at4UsJZ.png`}
        />
      </FlexRow>
      <FlexRow1>
        <FlexColumn>
          <Element2>
            <GrayFlexRow>
              <AirCanadaInc>
                {" "}
                <br />
                Air Canada Inc.
              </AirCanadaInc>
            </GrayFlexRow>
            <Text2>$1800.39 CAD</Text2>
          </Element2>
          <Element3>
            <BlackFlexRow>
              <Text3>Airbnb, Inc.</Text3>
            </BlackFlexRow>
            <Text4>$2000.87 CAD</Text4>
          </Element3>
          <Element4>
            <GrayFlexRow1>
              <Text5>Tesla, Inc.</Text5>
            </GrayFlexRow1>
            <Text4>$3822.59 CAD</Text4>
          </Element4>
          <Element5>
            <GrayFlexRow1>
              <Text7>Meta Platforms, Inc.</Text7>
            </GrayFlexRow1>
            <Text8>$1000.39 CAD</Text8>
            <GrayFlexRow3>
              <AppleInc>
                Apple
                {"  "}
                Inc.
              </AppleInc>
            </GrayFlexRow3>
            <Text9>$1979.60 CAD</Text9>
          </Element5>
        </FlexColumn>
        <FlexColumn1>
          <FlexRow2>
            <Text10>Airbnb Inc.</Text10>
            <Arrow src={`https://file.rendit.io/n/n4QrOWWtECoqviE8Qyqd.svg`} />
            <Text11>-5.58%</Text11>
          </FlexRow2>
          <Element6>
            <TimberwolfRectangle />
            <Text12>Latest News</Text12>
            <TimberwolfFlexColumn>
              <Paragraph>
                Vacation rental shooting in Scottsdale adds fuel to Airbnb
                opposition
              </Paragraph>
              <ImpactAfterNews1>
                Impact after news: <ImpactAfterNews>-0.98%</ImpactAfterNews>
              </ImpactAfterNews1>
              <Paragraph1>
                A shooting in Scottsdale at a short-term rental earlier this
                month has residents and elected officials doubling down on their
                opposition to Airbnb-style vacation rentals.
              </Paragraph1>
            </TimberwolfFlexColumn>
            <BlackFlexRow1>
              <Text13>5h</Text13>
            </BlackFlexRow1>
          </Element6>
        </FlexColumn1>
      </FlexRow1>
    </RectangleRootRoot>
  );
};

const Text4 = styled.div`
  width: 262.26px;
  height: 88.8px;
  left: 193.85px;
  top: 33.95px;
  position: absolute;
  color: #fffafa;
  font-size: 20px;
  font-family: Alata;
`;
const GrayFlexRow1 = styled.div`
  width: 330.68px;
  left: 2.28px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #a7ada9;
  border-radius: 20px;
  padding: 33.95px 15.96px 31.34px 15.96px;
`;
const RectangleRootRoot = styled.div`
  width: 1449px;
  height: 982px;
  gap: 76.2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #7a8a7c;
  padding: 0px 46px 0px 17px;
`;
const FlexRow = styled.div`
  height: 132.59px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 25px 0px 0px;
`;
const Text1 = styled.div`
  width: 501.72px;
  height: 130.59px;
  align-self: flex-end;
  color: #ffffff;
  font-size: 64px;
  font-family: Alata;
  text-align: center;
`;
const ScreenShotAt = styled.img`
  width: 346px;
  height: 112px;
`;
const FlexRow1 = styled.div`
  gap: 20.52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const FlexColumn = styled.div`
  width: 472.07px;
  height: 668.6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Element2 = styled.div`
  width: 472.07px;
  height: 125.36px;
  position: relative;
  margin: 0px 0px 7.84px 0px;
`;
const GrayFlexRow = styled.div`
  width: 328.4px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #a6ada8;
  border-radius: 20px;
  padding: 5.22px 15.96px 28.73px 15.96px;
`;
const AirCanadaInc = styled.div`
  width: 148.24px;
  height: 62.68px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
  white-space: pre-wrap;
`;
const Text2 = styled.div`
  width: 262.26px;
  height: 88.8px;
  left: 196.13px;
  top: 36.56px;
  position: absolute;
  color: #fffafa;
  font-size: 20px;
  font-family: Alata;
`;
const Element3 = styled.div`
  width: 472.07px;
  height: 122.75px;
  position: relative;
  margin: 0px 0px 10.45px 0px;
`;
const BlackFlexRow = styled.div`
  width: 330.68px;
  left: 2.28px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #232d26;
  border-radius: 20px;
  padding: 33.95px 15.96px 31.34px 15.96px;
`;
const Text3 = styled.div`
  width: 109.47px;
  height: 31.34px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const Element4 = styled.div`
  width: 472.07px;
  height: 122.75px;
  position: relative;
  margin: 0px 0px 26.12px 0px;
`;
const Text5 = styled.div`
  width: 93.5px;
  height: 31.34px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const Element5 = styled.div`
  width: 472.07px;
  height: 245.5px;
  position: relative;
`;
const Text7 = styled.div`
  width: 189.29px;
  height: 31.34px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const Text8 = styled.div`
  width: 262.26px;
  height: 88.8px;
  left: 209.81px;
  top: 33.95px;
  position: absolute;
  color: #fffafa;
  font-size: 20px;
  font-family: Alata;
`;
const GrayFlexRow3 = styled.div`
  width: 330.68px;
  left: 2.28px;
  top: 122.75px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #a7ada9;
  border-radius: 20px;
  padding: 33.95px 15.96px 31.34px 15.96px;
`;
const AppleInc = styled.div`
  width: 100.34px;
  height: 31.34px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
  white-space: pre-wrap;
`;
const Text9 = styled.div`
  width: 262.26px;
  height: 88.8px;
  left: 205.25px;
  top: 156.7px;
  position: absolute;
  color: #fffafa;
  font-size: 20px;
  font-family: Alata;
`;
const FlexColumn1 = styled.div`
  width: 903.06px;
  height: 668.6px;
  gap: 31.34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const Text10 = styled.div`
  width: 228.05px;
  height: 73.13px;
  color: #ffffff;
  font-size: 36px;
  font-family: Alata;
  margin: 0px 466.48px 0px 0px;
`;
const Arrow = styled.img`
  width: 7.36px;
  height: 44.9px;
  align-self: flex-end;
  margin: 0px 28.32px 12.01px 0px;
`;
const Text11 = styled.div`
  width: 166px;
  height: 47px;
  align-self: flex-start;
  color: #ffffff;
  font-size: 36px;
  font-family: Alata;
  margin: 11.22px 0px 0px 0px;
`;
const Element6 = styled.div`
  width: 903.06px;
  height: 551.07px;
  position: relative;
`;
const TimberwolfRectangle = styled.div`
  width: 232.62px;
  height: 52.23px;
  position: absolute;
  background-color: #d9d9d9;
  border-radius: 20px;
`;
const Text12 = styled.div`
  width: 257.7px;
  height: 94.02px;
  left: 34.06px;
  top: 14.75px;
  position: absolute;
  font-size: 20px;
  font-family: Alata;
`;
const TimberwolfFlexColumn = styled.div`
  height: 374.48px;
  top: 114.91px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #d9d9d9;
  border-radius: 20px;
  padding: 30.84px 77.54px 30.84px 36.06px;
`;
const Paragraph = styled.div`
  width: 752.58px;
  height: 88.8px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
  margin: 0px 0px 29.23px 0px;
`;
const ImpactAfterNews1 = styled.div`
  height: 44.4px;
  font-size: 20px;
  font-family: Alata;
  white-space: pre-wrap;
  margin: 0px 0px 18.28px 0.43px;
`;
const ImpactAfterNews = styled.div`
  display: contents;
  color: #bf2121;
  font-size: 20px;
  font-family: Alata;
`;
const Paragraph1 = styled.div`
  width: 761.7px;
  height: 133.2px;
  align-self: flex-end;
  font-size: 20px;
  font-family: Alata;
`;
const BlackFlexRow1 = styled.div`
  width: 832.4px;
  top: 101.86px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #242e26;
  border-radius: 20px 20px 0px 0px;
  padding: 33.95px 22.81px 67.9px 22.81px;
`;
const Text13 = styled.div`
  width: 25.09px;
  height: 26.12px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
