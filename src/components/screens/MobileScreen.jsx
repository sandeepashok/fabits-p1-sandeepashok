import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled/macro";
import StatusBar from "../navbar/StatusBar";
import Navbar from "../navbar/Navbar";
import { ReactComponent as InfoCard } from "../../assets/trade-info-card.svg";
import TradingExperience from "./TradingExperience";
import PanDetails from "./PanDetails";
import LodingScreen from "./LodingScreen";
import VerifyDetails from "./VerifyDetails";
import { storeContext } from "../../hooks/StoreContext";

const MobileScreenContainer = styled.div`
  min-height: 800px;
  height: 800px;
  width: 360px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #F4F7FE;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Overlay = styled.div`
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
  height: 188px;
  width: calc(100% - 32px);
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const TradeInfoCard = styled(InfoCard)`
  height: 100%;
  width: 100%;
`;

const MobileScreenContent = () => {
  const { state } = useContext(storeContext);
  const { currentScreen } = state;
  return (
    <MobileScreenContainer>
      <Overlay isVisible={!!currentScreen}>
        {currentScreen === 1 && <TradingExperience />}
        {currentScreen === 2 && <PanDetails />}
        {currentScreen === 3 && <LodingScreen />}
        {currentScreen === 4 && <VerifyDetails />}
      </Overlay>
      <StatusBar />
      <Navbar />
      <TradeInfoContainer>
        <TradeInfoCard />
      </TradeInfoContainer>
    </MobileScreenContainer>
  );
};

export default MobileScreenContent;
