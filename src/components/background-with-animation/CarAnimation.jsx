import { useEffect, useContext, useState } from "react";
import car from "../../assets/car.png"
import backgroundone from "../../assets/screenone.svg"
import backgroundtwo from "../../assets/screentwo.svg"
import backgroundthree from "../../assets/screenthree.svg"
import styled from "@emotion/styled";
import { storeContext } from "../../hooks/StoreContext";
import { TYPES } from "../../hooks/types";

const BgContainer = styled.div`
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: left;
  overflow: hidden;
  width: 100%;
  height: ${({ screen }) => screen === 1 ? "349px" : screen === 2 ? "288px" : "535px"};
  position: relative;
`;

const CarImg = styled.img`
  position: absolute;
  width: 100px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}%;
  transition:
    left 4s ease,
    opacity 0.1s ease
    ${({ screen }) => screen === 3 ? ",top 0.3s ease-in-out" : ""};
  opacity: ${({ visible }) => visible ? "1" : "0"};
  @media (max-width: 425px){
    top: ${({ top }) => top + 20}px;
  }
  @media (max-width: 375px){
    top: ${({ top }) => top + 5}px;
  }
  @media (max-width: 360px){
    top: ${({ top }) => top}px;
  }
`;

const CarAnimation = ({ screen }) => {

  const { state, dispatch } = useContext(storeContext);
  const { position, isVisible } = state;
  const [bounceHeight, setBounceHeight] = useState(355)

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: TYPES.SET_CAR_POSITION_AND_VISIBLITY, payload: { position: 100, visiblity: true } })
      if (screen === 3) {
        setTimeout(() => {
          setBounceHeight(height => height - 30)
        }, 1350);
        setTimeout(() => {
          setBounceHeight(height => height + 30)
        }, 1600);
      }
      setTimeout(() => {
        dispatch({ type: TYPES.SET_CAR_POSITION_AND_VISIBLITY, payload: { position: -100, visiblity: false } })
      }, 4000);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [dispatch, screen]);

  return (
    <BgContainer
      bg={screen === 1 ? backgroundone : screen === 2 ? backgroundtwo : backgroundthree}
      screen={screen}
    >
      <CarImg
        src={car}
        alt="car"
        left={position}
        visible={isVisible}
        top={screen === 1 ? 250 : screen === 2 ? 200 : bounceHeight}
        screen={screen}
      />
    </BgContainer >
  );
}

export default CarAnimation