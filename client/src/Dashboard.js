import React from "react";
import styled from "styled-components";

export const DashboardPage = ({}) => {
  return (
    <GroupRootRoot>
      <GrayFlexColumn>
        <FlexRow>
          <Element1>
            <WhiteRectangle />
            <Text1 placeholder={`Search Stocks, ETFs, Cryptocurrencies`} />
            <BlackFlexRow>
              <ScreenShotAt
                src={`https://file.rendit.io/n/Oo3lrqm1AxMVcTl7OaTs.png`}
              />
            </BlackFlexRow>
          </Element1>
          <WhiteFlexRow onClick={() => window.open("/portfolio", "_self")}> 
            <Text2>Connect Your Portfolio</Text2>
          </WhiteFlexRow>
        </FlexRow>
        <FlexRow1>
          <FlexColumn>
            <Text3>Stocks</Text3>
            <Element2>
              <TimberwolfFlexColumn>
                <BlackFlexRow1>
                  <AirCanadaInc>
                    {" "}
                    <br />
                    Air Canada Inc.
                  </AirCanadaInc>
                </BlackFlexRow1>
                <Element3>
                  <Paragraph>
                    Air Canada is buying some fancy new planes that look like
                    they’re from the future
                  </Paragraph>
                  <Text4>2d</Text4>
                </Element3>
                <Paragraph1>
                  It's been a rough couple of years for Air Canada, to say the
                  least..
                </Paragraph1>
                <FlexRow2>
                  <Text5>Tesla Inc</Text5>
                </FlexRow2>
                <Element4>
                  <Paragraph2>
                    Tesla owner says he’s locked out after battery died,
                    replacement costs $26K
                  </Paragraph2>
                  <Text6>2d</Text6>
                </Element4>
                <FlexRow3>
                  <Text7>Apple Inc</Text7>
                </FlexRow3>
              </TimberwolfFlexColumn>
              <Text8>$18.39 CAD</Text8>
              <Text9>$303.35 USD</Text9>
              <Paragraph3>
                Some Tesla owners have voiced frustration about the electric...
              </Paragraph3>
            </Element2>
          </FlexColumn>
          <FlexColumn1>
            <Text10>Cryptocurrencies</Text10>
            <Element5>
              <TimberwolfFlexColumn1>
                <BlackFlexRow2>
                  <Text5>Cardano</Text5>
                </BlackFlexRow2>
                <Text12>12 h</Text12>
                <Paragraph4>
                  Cardano: IOG Shares Latest on Vasil and What To Expect After
                </Paragraph4>
                <Element6>
                  <FlexRow4>
                    <Text13>Ether</Text13>
                  </FlexRow4>
                  <Paragraph5>
                    The much anticipated Vasil upgrade is now a little under one
                    week away...
                    <br />
                  </Paragraph5>
                </Element6>
                <Element7>
                  <Paragraph6>
                    Ether falls after the smart contracts network completes long
                    anticipated ‘merge’
                  </Paragraph6>
                  <Text14>1d</Text14>
                </Element7>
                <Paragraph7>
                  The price of ether fell Thursday after the Ethereum network...
                </Paragraph7>
                <FlexRow5>
                  <Text15>Bitcoin</Text15>
                </FlexRow5>
              </TimberwolfFlexColumn1>
              <Text16>$0.6427 CAD</Text16>
              <Text17>$1,929.05 CAD</Text17>
              <Text18>$26,561.31 CAD</Text18>
            </Element5>
          </FlexColumn1>
          <Element8>
            <Text19>ETFs</Text19>
            <TimberwolfFlexColumn2>
              <BlackRectangle>
                <Text20>SPDR S&P 500</Text20>
                <Text21>$385.56 USD</Text21>
              </BlackRectangle>
              <Element9>
                <Paragraph8>
                  The S&P 500 sank 5% in a very bad week for stocks. These 20
                  lost as much as 40%
                </Paragraph8>
                <Text22>2d</Text22>
              </Element9>
              <Paragraph9>
                It's been a rough couple of years for Air Canada, to say the
                least..
              </Paragraph9>
              <FlexRow6>
                <DowJones>Dow Jones </DowJones>
              </FlexRow6>
              <Element10>
                <Paragraph10>
                  Air Canada is buying some fancy new planes that look like
                  they’re from the future
                </Paragraph10>
                <Text23>2d</Text23>
              </Element10>
              <Paragraph11>
                It's been a rough couple of years for Air Canada, to say the
                least..
              </Paragraph11>
              <FlexRow7>
                <Text24>Russell 2000</Text24>
                <Text25>$1,798.19 USD</Text25>
              </FlexRow7>
            </TimberwolfFlexColumn2>
            <Text26>$30,822.40 USD</Text26>
          </Element8>
        </FlexRow1>
      </GrayFlexColumn>
      <Text27>$150.70 USD</Text27>
    </GroupRootRoot>
  );
};

const Text5 = styled.div`
  width: 81.04px;
  height: 29.84px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const GroupRootRoot = styled.div`
  width: 1512px;
  height: 982px;
  position: relative;
`;
const GrayFlexColumn = styled.div`
  width: 1512px;
  height: 975px;
  position: absolute;
  gap: 52.08px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #7a8a7c;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 54.03px 0px 69.03px;
`;
const Element1 = styled.div`
  width: 881.85px;
  height: 64.65px;
  position: relative;
  align-self: stretch;
`;
const WhiteRectangle = styled.div`
  width: 875.69px;
  height: 64.65px;
  position: absolute;
  background-color: #fafafa;
  border-radius: 20px;
`;
const Text1 = styled.input`
  width: 848.67px;
  height: 47.24px;
  left: 33.17px;
  top: 17.25px;
  position: absolute;
  display: inline-block;
  padding: 0px;
  font-size: 20px;
  font-family: Alata;
  outline-width: 0px;
  border-width: 0px;
  background: none;
  :: placeholder {
    color: undefined;
  }
`;
const BlackFlexRow = styled.div`
  width: 164.33px;
  left: 711.36px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #070707;
  border-radius: 20px;
  padding: 9.95px 0px 12.43px 0px;
`;
const ScreenShotAt = styled.img`
  width: 45.02px;
  height: 42.27px;
`;
const WhiteFlexRow = styled.div`
  width: 312.38px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #fafafa;
  border-radius: 20px;
  padding: 17.25px 18.27px 5.13px 18.27px;
`;
const Text2 = styled.div`
  width: 272.39px;
  height: 42.27px;
  font-size: 20px;
  font-family: Alata;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const FlexColumn = styled.div`
  width: 545.45px;
  height: 793.31px;
  gap: 20.03px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 12.08px 0px 0px;
`;
const Text3 = styled.div`
  width: 441.22px;
  height: 74.59px;
  color: #ffffff;
  font-size: 36px;
  font-family: Alata;
  text-align: center;
`;
const Element2 = styled.div`
  width: 545.45px;
  height: 678.8px;
  position: relative;
  align-self: stretch;
`;
const TimberwolfFlexColumn = styled.div`
  height: 678.8px;
  left: 69.03px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 20px 20px 0px 0px;
`;
const BlackFlexRow1 = styled.div`
  width: 289.85px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #232d26;
  border-radius: 20px 20px 0px 0px;
  padding: 3.88px 26.16px 28.45px 26.16px;
  margin: 0px 0px 2.49px 0px;
`;
const AirCanadaInc = styled.div`
  width: 146.32px;
  height: 59.67px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
  white-space: pre-wrap;
`;
const Element3 = styled.div`
  width: 342.17px;
  height: 114.37px;
  position: relative;
  align-self: stretch;
  margin: 0px 0px 4.97px 0px;
`;
const Paragraph = styled.div`
  width: 317.41px;
  height: 89.51px;
  left: 11.26px;
  top: 24.86px;
  position: absolute;
  font-size: 20px;
  font-family: Alata;
`;
const Text4 = styled.div`
  width: 20.26px;
  height: 24.86px;
  left: 310.72px;
  position: absolute;
  font-size: 12px;
  font-family: Alata;
`;
const Paragraph1 = styled.div`
  width: 315.16px;
  height: 59.67px;
  color: #8b8787;
  font-size: 20px;
  font-family: Alata;
  margin: 0px 0px 24.86px 0px;
`;
const FlexRow2 = styled.div`
  width: 292.65px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/41UKNysREGEeWJm0k23p.svg");
  padding: 32.32px 24.76px 29.84px 24.76px;
  margin: 0px 0px 2.49px 0px;
`;
const Element4 = styled.div`
  width: 342.17px;
  height: 114.38px;
  position: relative;
  align-self: stretch;
  margin: 0px 0px 77.08px 0px;
`;
const Paragraph2 = styled.div`
  width: 317.41px;
  height: 89.51px;
  left: 13.51px;
  top: 24.86px;
  position: absolute;
  font-size: 20px;
  font-family: Alata;
`;
const Text6 = styled.div`
  width: 20.26px;
  height: 24.86px;
  left: 310.66px;
  position: absolute;
  font-size: 15px;
  font-family: Alata;
`;
const FlexRow3 = styled.div`
  width: 292.65px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/QpAIvSP1VgsxRsbPnMMN.svg");
  padding: 37.3px 24.76px 24.86px 24.76px;
`;
const Text7 = styled.div`
  width: 87.79px;
  height: 29.84px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const Text8 = styled.div`
  width: 258.88px;
  height: 84.54px;
  left: 286.57px;
  top: 34.41px;
  position: absolute;
  color: #fffafa;
  font-size: 20px;
  font-family: Alata;
`;
const Text9 = styled.div`
  width: 258.88px;
  height: 84.54px;
  left: 267.13px;
  top: 330.7px;
  position: absolute;
  color: #fffafa;
  font-size: 20px;
  font-family: Alata;
`;
const Paragraph3 = styled.div`
  width: 353.43px;
  height: 59.67px;
  left: 78.03px;
  top: 509.72px;
  position: absolute;
  color: #8b8787;
  font-size: 20px;
  font-family: Alata;
`;
const FlexColumn1 = styled.div`
  width: 506.5px;
  gap: 12.43px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 43.17px 0px 0px;
`;
const Text10 = styled.div`
  width: 420.96px;
  height: 82.05px;
  color: #ffffff;
  font-size: 36px;
  font-family: Alata;
  text-align: center;
`;
const Element5 = styled.div`
  width: 506.5px;
  height: 698.69px;
  position: relative;
  align-self: stretch;
`;
const TimberwolfFlexColumn1 = styled.div`
  height: 678.8px;
  left: 47.27px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 20px 20px 0px 0px;
`;
const BlackFlexRow2 = styled.div`
  width: 283.64px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #232d26;
  border-radius: 20px 20px 0px 0px;
  padding: 32.32px 29.26px 29.84px 29.26px;
  margin: 0px 0px 2.49px 0px;
`;
const Text12 = styled.div`
  width: 29.26px;
  height: 24.86px;
  align-self: flex-end;
  font-size: 15px;
  font-family: Alata;
  margin: 0px 6.75px 0px 0px;
`;
const Paragraph4 = styled.div`
  width: 317.41px;
  height: 59.67px;
  align-self: flex-end;
  font-size: 20px;
  font-family: Alata;
  margin: 0px 4.5px 12.43px 0px;
`;
const Element6 = styled.div`
  width: 342.17px;
  height: 198.92px;
  position: relative;
  align-self: stretch;
  margin: 0px 0px 7.46px 0px;
`;
const FlexRow4 = styled.div`
  width: 283.64px;
  top: 106.92px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/k2O4AZL1XqIrlw45iZbU.svg");
  padding: 27.35px 29.26px 34.81px 29.26px;
`;
const Text13 = styled.div`
  width: 47.27px;
  height: 29.84px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const Paragraph5 = styled.div`
  width: 310.66px;
  height: 119.35px;
  left: 20.26px;
  position: absolute;
  color: #8b8787;
  font-size: 20px;
  font-family: Alata;
`;
const Element7 = styled.div`
  width: 342.17px;
  height: 109.4px;
  position: relative;
  align-self: stretch;
  margin: 0px 0px 7.46px 0px;
`;
const Paragraph6 = styled.div`
  width: 317.41px;
  height: 89.51px;
  left: 11.26px;
  top: 19.89px;
  position: absolute;
  font-size: 20px;
  font-family: Alata;
`;
const Text14 = styled.div`
  width: 15.76px;
  height: 24.86px;
  left: 310.65px;
  position: absolute;
  font-size: 15px;
  font-family: Alata;
`;
const Paragraph7 = styled.div`
  width: 315.16px;
  height: 59.67px;
  color: #8b8787;
  font-size: 20px;
  font-family: Alata;
  margin: 0px 0px 9.95px 0px;
`;
const FlexRow5 = styled.div`
  width: 288.14px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/hvYVd8lMjSCk22RTC21u.svg");
  padding: 29.84px 27.01px 32.32px 27.01px;
`;
const Text15 = styled.div`
  width: 65.28px;
  height: 29.84px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const Text16 = styled.div`
  width: 258.88px;
  height: 84.54px;
  left: 247.62px;
  top: 32.32px;
  position: absolute;
  color: #fffafa;
  font-size: 20px;
  font-family: Alata;
`;
const Text17 = styled.div`
  width: 258.88px;
  height: 84.54px;
  left: 236.37px;
  top: 330.7px;
  position: absolute;
  color: #fffafa;
  font-size: 20px;
  font-family: Alata;
`;
const Text18 = styled.div`
  width: 258.88px;
  height: 84.54px;
  left: 225.11px;
  top: 614.15px;
  position: absolute;
  color: #fffafa;
  font-size: 20px;
  font-family: Alata;
`;
const Element8 = styled.div`
  width: 404.8px;
  height: 793.31px;
  position: relative;
`;
const Text19 = styled.div`
  width: 337.67px;
  height: 92px;
  top: 2.95px;
  position: absolute;
  color: #ffffff;
  font-size: 36px;
  font-family: Alata;
  text-align: center;
`;
const TimberwolfFlexColumn2 = styled.div`
  height: 678.8px;
  left: 1.85px;
  top: 94.62px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 20px 20px 0px 0px;
`;
const BlackRectangle = styled.div`
  width: 342.17px;
  height: 92px;
  position: relative;
  background-color: #232d26;
  border-radius: 20px 20px 0px 0px;
  margin: 0px 0px 2.49px 0px;
`;
const Text20 = styled.div`
  width: 227.36px;
  height: 29.84px;
  left: 20.26px;
  top: 34.81px;
  position: absolute;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const Text21 = styled.div`
  width: 137.32px;
  height: 29.84px;
  left: 200.55px;
  top: 32.44px;
  position: absolute;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const Element9 = styled.div`
  width: 342.17px;
  height: 109.4px;
  position: relative;
  align-self: stretch;
  margin: 0px 0px 4.97px 0px;
`;
const Paragraph8 = styled.div`
  width: 317.41px;
  height: 89.51px;
  left: 13.51px;
  top: 19.88px;
  position: absolute;
  font-size: 20px;
  font-family: Alata;
`;
const Text22 = styled.div`
  width: 20.26px;
  height: 24.86px;
  left: 316.78px;
  position: absolute;
  font-size: 15px;
  font-family: Alata;
`;
const Paragraph9 = styled.div`
  width: 315.16px;
  height: 59.67px;
  align-self: flex-end;
  color: #8b8787;
  font-size: 20px;
  font-family: Alata;
  margin: 0px 11.26px 29.84px 0px;
`;
const FlexRow6 = styled.div`
  width: 288.14px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/iwWizsW9Gex3ODdp3Gjv.svg");
  padding: 32.32px 27.01px 29.84px 27.01px;
  margin: 0px 0px 2.49px 0px;
`;
const DowJones = styled.div`
  width: 99.05px;
  height: 29.84px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
  white-space: pre-wrap;
`;
const Element10 = styled.div`
  width: 342.17px;
  height: 111.89px;
  position: relative;
  align-self: stretch;
  margin: 0px 0px 4.97px 0px;
`;
const Paragraph10 = styled.div`
  width: 317.41px;
  height: 89.51px;
  left: 15.76px;
  top: 22.38px;
  position: absolute;
  font-size: 20px;
  font-family: Alata;
`;
const Text23 = styled.div`
  width: 20.26px;
  height: 24.86px;
  left: 315.16px;
  position: absolute;
  font-size: 15px;
  font-family: Alata;
`;
const Paragraph11 = styled.div`
  width: 315.16px;
  height: 59.67px;
  align-self: flex-end;
  color: #8b8787;
  font-size: 20px;
  font-family: Alata;
  margin: 0px 9px 14.92px 0px;
`;
const FlexRow7 = styled.div`
  width: 342.17px;
  gap: 56.28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/tv3Fk7zgvFlKlhEMaZPn.svg");
  padding: 29.84px 0px 32.32px 0px;
`;
const Text24 = styled.div`
  width: 121.56px;
  height: 29.84px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const Text25 = styled.div`
  width: 137.32px;
  height: 29.84px;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const Text26 = styled.div`
  width: 234.12px;
  height: 29.84px;
  left: 170.69px;
  top: 430.29px;
  position: absolute;
  color: #ffffff;
  font-size: 20px;
  font-family: Alata;
`;
const Text27 = styled.div`
  width: 258.88px;
  height: 84.54px;
  left: 269.38px;
  top: 897.46px;
  position: absolute;
  color: #fffafa;
  font-size: 20px;
  font-family: Alata;
`;
