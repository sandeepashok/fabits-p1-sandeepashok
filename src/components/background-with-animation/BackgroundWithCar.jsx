import { useEffect, useContext } from "react";
import car from "../../assets/car.png"
import background from "../../assets/bg.png"
import styled from "@emotion/styled";
import { storeContext } from "../../hooks/StoreContext";
import { TYPES } from "../../hooks/types";

const Container = styled.div`
  background-image: url(${background});
  text-align: left;
  overflow: hidden;
  width: 360px;
  height: 288px;
`;

const StyledImg = styled.img`
  position: relative;
  width: 100px;
  top: 200px;
  left: ${(props) => props.left}%;
  transition:
    left 4s ease,
    opacity 0.1s ease;
  opacity: ${(props) => (props.visible ? "1" : "0")};
`;

const BackgroundWithCar = () => {

  const { state, dispatch } = useContext(storeContext);
  const { position, isVisible } = state;

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: TYPES.SET_CAR_POSITION_AND_VISIBLITY, payload: { position: 100, visiblity: true } })
      setTimeout(() => {
        dispatch({ type: TYPES.SET_CAR_POSITION_AND_VISIBLITY, payload: { position: -100, visiblity: false } })
      }, 4000);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <>
      <Container>
        <StyledImg
          src={car}
          alt="car"
          left={position}
          visible={isVisible}
        />
      </Container>
    </>
  );
}

export default BackgroundWithCar