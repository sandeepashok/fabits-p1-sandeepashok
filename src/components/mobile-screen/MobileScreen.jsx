import styled from "@emotion/styled/macro"
import StatusBar from "../navbar/StatusBar"
import Navbar from "../navbar/Navbar"
import { ReactComponent as InfoCard } from "../../assets/trade-info-card.svg"

const MobileScreenContainer = styled.div`
  min-width: 320px;
  max-width: 425px;
  min-height: 800px;
  height: 800px;
  width: 360px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #F4F7FE;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 425px) {
    height: 100vh;
    width: 100vw;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #F4F7FECC;
`

const TradeInfoContainer = styled.div`
  height: 188px;
  width: calc(100% - 32px);
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TradeInfoCard = styled(InfoCard)`
  height: 100%;
  width: 100%;
`

const MobileScreen = () => {
  return (
    <MobileScreenContainer>
      <Overlay />
      <StatusBar />
      <Navbar />
      <TradeInfoContainer>
        <TradeInfoCard />
      </TradeInfoContainer>
    </MobileScreenContainer>
  )
}

export default MobileScreen