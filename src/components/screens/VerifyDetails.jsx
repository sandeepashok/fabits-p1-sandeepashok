import styled from "@emotion/styled/macro"
import backgroundthree from "../../assets/screenthree.svg"
import dp from "../../assets/account-circle-color.svg"
import fingerPrint from "../../assets/fingerprint.svg"
import home from "../../assets/home.svg"
import { ReactComponent as Close } from "../../assets/close.svg"
import { CloseOverlay, CloseOverlayContainer, GettingStarted as Gettingstarted, Heading, SubHeading } from "./TradingExperience";
import { TYPES } from "../../hooks/types";
import { useContext } from "react";
import { storeContext } from "../../hooks/StoreContext";


const ScreenContainer = styled.div`
  width: 100%;
  height: 699px;
  border-radius: 24px 24px 0 0;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
`
const BgContainer = styled.div`
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: left;
  overflow: hidden;
  width: 100%;
  height: 535px;
  position: relative;
  border-radius: 24px 24px 0 0;
`;

const Filler = styled.div`
  width: 100%;
  height: 164px;
  background: linear-gradient(#e7e76b 100%, #ffffdb 35%);
`
const Blur = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 698px;
  width: 100%;
  z-index: 999;
  border-radius: 24px 24px 0 0;
  background: rgba(255, 255, 255, 0.19);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.5px);
  display: flex;
  flex-direction: column;
`
const VerifyDetailsContainer = styled(Gettingstarted)`
  margin-top: 48px;
  margin-bottom: 0;
  position: unset;
`
const AadhaarDetails = styled.div`
  width: calc(100% - 32px);
  height: 490px;
  margin: 0 16px;
`
const Card = styled.div`
  height: 146px;
  width: 100%;
  margin: 24px 0;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0px 6px 16px 0px rgba(45, 45, 45, 0.16);
`
const CardImageAndHeading = styled.div`
  display: flex;
  justify-content: flex-start;
`
const CardImg = styled.img`
  margin: 16px 12px 10px 16px;
  height: 64px;
  width: 64px;
`
const CardHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const CardHeading = styled.b`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  line-height: -4%;
  color: #1D3B7A;
  margin: 16px 16px 0 0;
`

const CardSubHeading = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #5E78AE;
`
const SubTitlesGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 16px;
`
const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`
const Subtitle = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: #5E78AE;
`
const Title = styled.b`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #1D3B7A;
`

const VerifyDetails = () => {

  const { dispatch } = useContext(storeContext)

  const handleClose = () => {
    dispatch({ type: TYPES.CLOSE_KYC })
  }

  return (
    <ScreenContainer>
      <CloseOverlayContainer>
        <CloseOverlay onClick={handleClose}><Close /></CloseOverlay>
      </CloseOverlayContainer>
      <Blur>
        <VerifyDetailsContainer>
          <Heading>Verify your details</Heading>
          <SubHeading>Aadhaar link found</SubHeading>
        </VerifyDetailsContainer>
        <AadhaarDetails>
          <Card>
            <CardImageAndHeading>
              <CardImg src={dp} alt="Profile picture" />
              <CardHeadingContainer>
                <CardHeading>CMRPMXXXXF</CardHeading>
                <CardSubHeading>ASHAR RAI MUJEEB</CardSubHeading>
              </CardHeadingContainer>
            </CardImageAndHeading>
            <SubTitlesGroup>
              <SubtitleContainer>
                <Subtitle>Fetched Via</Subtitle>
                <Title>NSDL</Title>
              </SubtitleContainer>
              <SubtitleContainer>
                <Subtitle>Last Updated</Subtitle>
                <Title>24/04/2024</Title>
              </SubtitleContainer>
            </SubTitlesGroup>
          </Card>
          <Card>
            <CardImageAndHeading>
              <CardImg src={fingerPrint} alt="Profile picture" />
              <CardHeadingContainer>
                <CardHeading>Address</CardHeading>
                <CardSubHeading>Aadhaar <br /> UID</CardSubHeading>
              </CardHeadingContainer>
            </CardImageAndHeading>
            <SubTitlesGroup>
              <SubtitleContainer>
                <Subtitle>Fetched Via</Subtitle>
                <Title>Digio</Title>
              </SubtitleContainer>
              <SubtitleContainer>
                <Subtitle>Date of Birth</Subtitle>
                <Title>18/10/1994</Title>
              </SubtitleContainer>
            </SubTitlesGroup>
          </Card>
          <Card>
            <CardImageAndHeading>
              <CardImg src={home} alt="Profile picture" />
              <CardHeadingContainer>
                <CardHeading>Address</CardHeading>
                <CardSubHeading>16/2, 8 Jat Regiment, c/o 56 APO</CardSubHeading>
              </CardHeadingContainer>
            </CardImageAndHeading>
            <SubTitlesGroup>
              <SubtitleContainer>
                <Subtitle>Fetched Via</Subtitle>
                <Title>Digio</Title>
              </SubtitleContainer>
              <SubtitleContainer>
                <Subtitle>Address Type</Subtitle>
                <Title>Correspondence</Title>
              </SubtitleContainer>
            </SubTitlesGroup>
          </Card>
        </AadhaarDetails>
      </Blur>
      <BgContainer bg={backgroundthree} />
      <Filler />
    </ScreenContainer>
  )
}

export default VerifyDetails