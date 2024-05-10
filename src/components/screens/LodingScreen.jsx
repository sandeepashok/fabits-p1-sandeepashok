import styled from "@emotion/styled/macro"
import CarAnimation from "../background-with-animation/CarAnimation"
import { useContext, useEffect } from "react"
import { storeContext } from "../../hooks/StoreContext"
import { CloseOverlay, CloseOverlayContainer } from "./TradingExperience"
import { ReactComponent as Close } from "../../assets/close.svg"
import { TYPES } from "../../hooks/types"

const ScreenContainer = styled.div`
  width: 100%;
  height: 535px;
  border-radius: 24px 24px 0 0;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
`
const BgWithAnimation = styled(CarAnimation)`
  width: 100%;
`

const PanDetails = () => {
  const { state, dispatch } = useContext(storeContext);
  const { currentScreen } = state;

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: TYPES.SET_SCREEN_NUM, payload: 4 })
    }, 20000)
  }, [dispatch])


  const handleClose = () => {
    dispatch({ type: TYPES.CLOSE_KYC })
  }

  return (
    <ScreenContainer>
      <CloseOverlayContainer>
        <CloseOverlay onClick={handleClose}><Close /></CloseOverlay>
      </CloseOverlayContainer>
      <BgWithAnimation screen={currentScreen} />
    </ScreenContainer>
  )
}

export default PanDetails