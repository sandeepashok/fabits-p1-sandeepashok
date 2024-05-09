import React, { useContext } from "react";
import styled from "@emotion/styled/macro";
import StatusBar from "../navbar/StatusBar";
import Navbar from "../navbar/Navbar";
import { ReactComponent as InfoCard } from "../../assets/trade-info-card.svg";
import TradingExperience from "./TradingExperience";
import PanDetails from "./PanDetails";
import LodingScreen from "./LodingScreen";
import VerifyDetails from "./VerifyDetails";
import { storeContext } from "../../hooks/StoreContext";
import { TYPES } from "../../hooks/types";

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
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => isOpen ? "block" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #F4F7FECC;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const TradeInfoContainer = styled.div`
  width: calc(100% - 32px);
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: opacity 0.3s ease-in-out;
`;

const TradeInfoCard = styled(InfoCard)`
  height: 100%;
  width: 100%;
`;

const StartKyc = styled.button`
  margin: 16px;
  padding: 8px 16px;
  height: 48px;
  width: max-content;
  border-radius: 12px;
  background-color: #83A720;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 1.2px;
  cursor: pointer;
`

const MobileScreenContent = () => {
  const { state, dispatch } = useContext(storeContext);
  const { currentScreen, isKycDrawerOpen } = state;

  const handleOpenKyc = () => {
    dispatch({ type: TYPES.OPEN_KYC })
  }

  return (
    <MobileScreenContainer>
      <Overlay isVisible={!!currentScreen} isOpen={isKycDrawerOpen}>
        {currentScreen === 1 && <TradingExperience />}
        {currentScreen === 2 && <PanDetails />}
        {currentScreen === 3 && <LodingScreen />}
        {currentScreen === 4 && <VerifyDetails />}
      </Overlay>
      <StatusBar />
      <Navbar />
      <TradeInfoContainer>
        <TradeInfoCard />
        <StartKyc onClick={handleOpenKyc}>Start KYC</StartKyc>
      </TradeInfoContainer>
    </MobileScreenContainer>
  );
};

export default MobileScreenContent;
