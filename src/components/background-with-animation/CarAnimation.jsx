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
  height: ${({ screen }) => {
    switch (screen) {
      case 1:
        return "349px";
      case 2:
        return "288px";
      case 3:
        return "535px";
      default:
        return "auto";
    }
  }};
  position: relative;
  border-radius: 24px 24px 0 0;
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
  @media (max-width: 475px){
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
    const totalDelay = screen === 3 ? 4000 : 8000;
    const backwardsDelay = screen === 3 ? 2000 : 4000;
    const bounce = screen === 3 ? 1500 : 1350;
    const bounceBack = screen === 3 ? 1700 : 1600;

    dispatch({
      type: TYPES.SET_CAR_POSITION_AND_VISIBLITY,
      payload: { position: -100, visibility: true }
    });

    const intervalId = setInterval(() => {
      dispatch({ type: TYPES.SET_CAR_POSITION_AND_VISIBLITY, payload: { position: 100, visiblity: true } })
      if (screen === 3) {
        setTimeout(() => {
          setBounceHeight(height => height - 30)
        }, bounce);
        setTimeout(() => {
          setBounceHeight(height => height + 30)
        }, bounceBack);
      }
      setTimeout(() => {
        dispatch({ type: TYPES.SET_CAR_POSITION_AND_VISIBLITY, payload: { position: -100, visiblity: false } })
      }, backwardsDelay);
    }, totalDelay);

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