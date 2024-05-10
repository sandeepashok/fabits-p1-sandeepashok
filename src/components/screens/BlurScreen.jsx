import styled from "@emotion/styled/macro"
import backgroundthree from "../../assets/screenthree.svg"
import { useContext, useEffect } from "react";
import { storeContext } from "../../hooks/StoreContext";
import { TYPES } from "../../hooks/types";
import { CloseOverlay, CloseOverlayContainer } from "./TradingExperience";

import { ReactComponent as Close } from "../../assets/close.svg"

const ScreenContainer = styled.div`
  width: 100%;
  height: 535px;
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

const Blur = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 534px;
  width: 100%;
  z-index: 999;
  border-radius: 24px 24px 0 0;
  background: rgba(255, 255, 255, 0.19);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.5px);
`


const BlurScreen = () => {

  const { dispatch } = useContext(storeContext)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: TYPES.SET_SCREEN_NUM, payload: 5 })
    }, 1000)
  }, [dispatch])

  const handleClose = () => {
    dispatch({ type: TYPES.CLOSE_KYC })
  }

  return (
    <ScreenContainer>
      <CloseOverlayContainer>
        <CloseOverlay onClick={handleClose}><Close /></CloseOverlay>
      </CloseOverlayContainer>
      <Blur />
      <BgContainer bg={backgroundthree} />
    </ScreenContainer>
  )
}

export default BlurScreen