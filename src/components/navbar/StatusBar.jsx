import styled from "@emotion/styled/macro"
import { ReactComponent as StatusIcons } from "../../assets/status-bar-content.svg"

const StatusBarContainer = styled.div`
  height: 32px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`
const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Time = styled.p`
  margin: 16px;
  font-size: 13px;
  line-height: 15.23px;
  font-weight: 500px;
`

const StatusBarIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StatusBarIcons = styled(StatusIcons)`
  margin: 0 16px;
`

const StatusBar = () => {
  return (
    <StatusBarContainer>
      <TimeContainer>
        <Time>12:45</Time>
      </TimeContainer>
      <StatusBarIconsContainer>
        <StatusBarIcons />
      </StatusBarIconsContainer>
    </StatusBarContainer>
  )
}

export default StatusBar