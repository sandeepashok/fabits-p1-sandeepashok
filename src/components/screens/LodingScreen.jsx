import styled from "@emotion/styled/macro"
import CarAnimation from "../background-with-animation/CarAnimation"
import { useContext } from "react"
import { storeContext } from "../../hooks/StoreContext"

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
  const { state } = useContext(storeContext);
  const { currentScreen } = state;

  return (
    <ScreenContainer>
      <BgWithAnimation screen={currentScreen} />
    </ScreenContainer>
  )
}

export default PanDetails