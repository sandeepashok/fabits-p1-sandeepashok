import { TYPES } from "./types"

export const initialState = {
  position: -100,
  isVisible: true,
  currentScreen: 1,
  experienceId: 1
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
    case TYPES.SELECT_EXP_LEVEL:
      return selectExperienceLevel(state, payload)
    case TYPES.SET_SCREEN_NUM:
      return setScreenNumber(state, payload)
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

const setScreenNumber = (state, num) => {
  return { ...state, currentScreen: num }
}

const selectExperienceLevel = (state, id) => {
  return { ...state, experienceId: id }
}

export default reducer