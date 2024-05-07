import { TYPES } from "./types"

export const initialState = {
  position: -100,
  isVisible: true
}

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case TYPES.SET_CAR_POSITION_AND_VISIBLITY:
      return setCarPositionAndVisiblity(state, payload);
    case TYPES.CAR_MOVE_RIGHT:
      return carMoveRight(state);
    case TYPES.CAR_MOVE_LEFT:
      return carMoveLeft(state);
    default:
      return state
  }
}

const setCarPositionAndVisiblity = (state, { position, visiblity }) => {
  return { ...state, position: position, isVisible: visiblity }
}

const carMoveRight = (state) => {
  return { ...state, position: 100, isVisible: true }
}

const carMoveLeft = (state) => {
  return { ...state, position: -100, isVisible: true }
}

export default reducer