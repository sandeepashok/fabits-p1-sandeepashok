import styled from "@emotion/styled/macro"
import CarAnimation from "../background-with-animation/CarAnimation"
import { useContext } from "react"
import { storeContext } from "../../hooks/StoreContext"
import { CloseOverlay, HeadingAndPageNoContainer, PageNumber, PageNumberContainer, SurveyHeading } from "./TradingExperience"
import { ReactComponent as Close } from "../../assets/close.svg"
import { ReactComponent as BackArrow } from "../../assets/arrow-left.svg"
import { ReactComponent as Next } from "../../assets/arrow-right.svg"
import { TYPES } from "../../hooks/types"

const ScreenContainer = styled.div`
  width: 100%;
  height: 632.36px;
  border-radius: 24px 24px 0 0;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
`
const GettingStarted = styled.div`
  height: 56px;
  width: 100%;
  margin: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:flex-start;
  position: absolute;
  top: 0px;
  color: #1D3B7A;
  z-index: 10;
`

const Heading = styled.b`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: -4%;
`

const SubHeading = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`

const BgWithAnimation = styled(CarAnimation)`
  width: 100%;
`

const PanDetailVarification = styled.div`
  width: 100%;
  height: 344.36px;
  background: linear-gradient(#e7e76b 5%, #ffffdb 40%);
`

const OptionsContainer = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`

const VerificationHeading = styled.p`
  font-size: 14px;
  line-height: 20px;
  width: 500;
  color: #575757;
  margin:0 16px 4px 16px;
`

const Option = styled.button`
  all: unset;
  height:${({ highlight }) => highlight ? "42px" : "44px"};
  width: ${({ highlight }) => highlight ? "158px" : "160px"};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ highlight }) => highlight ? "#83A72014" : ""};
  border: ${({ highlight }) => highlight ? "2px solid #83A720" : ""};
  cursor: pointer;
  margin: 4px;
`
const OptionHeading = styled.b`
  font-size: 16px;
  margin: ${({ highlight }) => highlight ? "8px 18px 4px 18px" : "10px 20px 4px 20px"};
  line-height: 24px;
  font-weight: 600;
  letter-spacing: -4%;
  min-width: 77px;
  min-height: 24px;
`
const PanCardInfoContainer = styled.div`
  height: 44px;
  width: calc(100% - 32px);
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`
const PanCardInfoHeading = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #575757;
`
const PanNumInput = styled.input`
  width: 159px;
  height: 43px;
  border-radius: 12px;
  border: 1px solid #EAF0BB;
  background-color: #F5F8CC;
  padding-left: 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  text-transform: uppercase;
`
const ButtonGroup = styled.div`
  height: 44px;
  width: calc(100% - 32px);
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const BackBtn = styled.button`
  all: unset;
  height: calc(100% - 2px);
  width: 46px;
  border: 2px solid rgba(131, 167, 32, 0.1);
  background-color: #F5F8CC;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Complete = styled.button`
  all: unset;
  height: 48px;
  width: 256px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #83A720;
  cursor: pointer;
`
const BtnInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NextArrow = styled(Next)`
  margin-right: 16px;
`
const BtnName = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-left: 16px;
`

const options = [
  {
    heading: "Manual",
    id: 0
  },
  {
    heading: "Automatic",
    id: 1
  },
];

const PanDetails = () => {
  const { state, dispatch } = useContext(storeContext);
  const { currentScreen, verificationMethodId, panNumber } = state;

  const handleClose = () => {
    dispatch({ type: TYPES.CLOSE_KYC })
  };

  const handleOptionSelect = (id) => {
    dispatch({ type: TYPES.SELECT_VERIFICATION_METHOD, payload: id })
  };

  const handleInputChange = (e) => {
    dispatch({ type: TYPES.UPADTE_PAN_NUMBER, payload: e.target.value })
  }

  const handleBack = () => {
    dispatch({ type: TYPES.SET_SCREEN_NUM, payload: 1 })
    setTimeout(() => {
      dispatch({ type: TYPES.CAR_MOVE_LEFT })
    }, 50)
  }

  const handleComplete = () => {
    dispatch({ type: TYPES.SET_SCREEN_NUM, payload: 3 })
  }

  return (
    <ScreenContainer>
      <GettingStarted>
        <Heading>Get started with Fabits</Heading>
        <SubHeading>Answer a few questions to begin onboarding</SubHeading>
      </GettingStarted>
      <CloseOverlay onClick={handleClose}><Close /></CloseOverlay>
      <BgWithAnimation screen={currentScreen} />
      <PanDetailVarification>
        <HeadingAndPageNoContainer>
          <SurveyHeading>Please enter your PAN details to complete verification</SurveyHeading>
          <PageNumberContainer>
            <PageNumber>{currentScreen}/2</PageNumber>
          </PageNumberContainer>
        </HeadingAndPageNoContainer>
        <VerificationHeading>Verification method</VerificationHeading>
        <OptionsContainer>
          {
            options.map(({ heading, id }) => (
              <Option key={id} highlight={id === verificationMethodId} onClick={() => handleOptionSelect(id)}>
                <OptionHeading highlight={id === verificationMethodId}>{heading}</OptionHeading>
              </Option>))
          }
        </OptionsContainer>
        <PanCardInfoContainer>
          <PanCardInfoHeading>PAN Card Number</PanCardInfoHeading>
          <PanNumInput value={panNumber} type="text" maxLength="10" onChange={(e) => handleInputChange(e)} />
        </PanCardInfoContainer>
        <ButtonGroup>
          <BackBtn onClick={handleBack}><BackArrow /></BackBtn>
          <Complete onClick={handleComplete}>
            <BtnInfoContainer>
              <BtnName>Complete</BtnName>
              <NextArrow />
            </BtnInfoContainer>
          </Complete>
        </ButtonGroup>
      </PanDetailVarification>
    </ScreenContainer>
  )
}

export default PanDetails