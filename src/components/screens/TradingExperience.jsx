import styled from "@emotion/styled/macro"
import CarAnimation from "../background-with-animation/CarAnimation"
import { useContext } from "react"
import { storeContext } from "../../hooks/StoreContext"
import { TYPES } from "../../hooks/types"
import { ReactComponent as ArrowNext } from "../../assets/arrow-right.svg"
import { ReactComponent as Close } from "../../assets/close.svg"

const ScreenContainer = styled.div`
  width: 100%;
  height: 624.36px;
  border-radius: 24px 24px 0 0;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
`
export const GettingStarted = styled.div`
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

export const Heading = styled.b`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: -4%;
`

export const SubHeading = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`

const BgWithAnimation = styled(CarAnimation)`
  width: 100%;
`

const TradingExperienceSurvey = styled.div`
  width: 100%;
  height: 275.36px;
  background: linear-gradient(#e7e76b 5%, #ffffdb 35%);
`

export const HeadingAndPageNoContainer = styled.div`
  height: 56px;
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PageNumberContainer = styled.div`
  height: 56px;
  width: 48px;
  margin-right: 16px;
  display: flex;
  justify-content: flex-end;
`

export const SurveyHeading = styled.p`
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  letter-spacing: -4%;
  width: 280px;
  margin-left: 16px;
`
export const PageNumber = styled.p`
  height: 22px;
  width: 32px;
  margin-top: 6px;
  background-color: #2D2D2D;
  color: #ffffff;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500px;
  font-family: "Montserrat", sans-serif;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const OptionsContainer = styled.div`
  height: 68px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 32px;
`
export const Option = styled.button`
  all: unset;
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ highlight }) => highlight ? "#83A72014" : ""};
  border: ${({ highlight }) => highlight ? "2px solid #83A720" : ""};
  cursor: pointer;
`
export const OptionHeading = styled.b`
  font-size: 16px;
  margin: ${({ highlight }) => highlight ? "8px 18px 4px 18px" : "10px 20px 4px 20px"};
  line-height: 24px;
  font-weight: 600;
  letter-spacing: -4%;
`
const OptionSubHeading = styled.p`
  font-size: 14px;
  margin: ${({ highlight }) => highlight ? "0px 0px 8px 0px" : "0px 0px 10px 0px"};
  line-height: 20px;
  font-weight: 400;
`

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`

const NextButton = styled.button`
  height: 48px;
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #83A720;
  border-radius: 12px;
  cursor: pointer;
  & > svg {
    margin-right: 16px;
  }
`
const BtnName = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #FFFFFF;
  margin-left: 16px;
`

export const CloseOverlayContainer = styled.div`
  position: absolute;
  top: -56px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CloseOverlay = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: #555556;
  cursor: pointer;
`

const options = [
  {
    heading: "None",
    subheading: "<1Y",
    id: 0
  },
  {
    heading: "Beginner",
    subheading: "1Y-3Y",
    id: 1
  },
  {
    heading: "Mid",
    subheading: "3Y-5Y",
    id: 2
  },
  {
    heading: "Pro",
    subheading: ">5Y",
    id: 3
  }
]

const TradingExperience = () => {
  const { state, dispatch } = useContext(storeContext);
  const { currentScreen, experienceId } = state;

  const handleOptionSelect = (id) => {
    dispatch({ type: TYPES.SELECT_EXP_LEVEL, payload: id })
  }

  const handleNext = () => {
    dispatch({ type: TYPES.SET_SCREEN_NUM, payload: 2 });
    setTimeout(() => {
      dispatch({ type: TYPES.CAR_MOVE_RIGHT })
    }, 50);
  }

  const handleClose = () => {
    dispatch({ type: TYPES.CLOSE_KYC })
  }

  return (
    <ScreenContainer>
      <GettingStarted>
        <Heading>Get started with Fabits</Heading>
        <SubHeading>Answer a few questions to begin onboarding</SubHeading>
      </GettingStarted>
      <CloseOverlayContainer>
        <CloseOverlay onClick={handleClose}><Close /></CloseOverlay>
      </CloseOverlayContainer>
      <BgWithAnimation screen={currentScreen} />
      <TradingExperienceSurvey>
        <HeadingAndPageNoContainer>
          <SurveyHeading>How much trading experience do you have?</SurveyHeading>
          <PageNumberContainer>
            <PageNumber>{currentScreen}/2</PageNumber>
          </PageNumberContainer>
        </HeadingAndPageNoContainer>
        <OptionsContainer>
          {
            options.map(({ heading, subheading, id }) => (
              <Option key={id} highlight={id === experienceId} onClick={() => handleOptionSelect(id)}>
                <OptionHeading highlight={id === experienceId}>{heading}</OptionHeading>
                <OptionSubHeading highlight={id === experienceId}>{subheading}</OptionSubHeading>
              </Option>))
          }
        </OptionsContainer>
        <NextButtonContainer>
          <NextButton onClick={handleNext}>
            <BtnName>Next</BtnName> <ArrowNext />
          </NextButton>
        </NextButtonContainer>
      </TradingExperienceSurvey>
    </ScreenContainer>
  )
}

export default TradingExperience