import styled from "@emotion/styled/macro"
import CarAnimation from "../background-with-animation/CarAnimation"
import { useContext } from "react"
import { storeContext } from "../../hooks/StoreContext"

const ScreenContainer = styled.div`
  width: 100%;
  height: 632.36px;
  border-radius: 24px 24px 0 0;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
`

const BgWithAnimation = styled(CarAnimation)`
  width: 100%;
`

const PanDetailVarification = styled.div`
  width: 100%;
  height: 344.36px;
  background: linear-gradient(#e7e76b 5%, #ffffdb 40%);
`

const PanDetails = () => {
  const { state } = useContext(storeContext);
  const { currentScreen } = state;

  return (
    <ScreenContainer>
      <BgWithAnimation screen={currentScreen} />
      <PanDetailVarification>

      </PanDetailVarification>
    </ScreenContainer>
  )
}

export default PanDetails