import styled from "@emotion/styled/macro";
import MobileScreen from "./components/mobile-screen/MobileScreen";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`

function App() {
  return (
    <AppContainer>
      <MobileScreen />
    </AppContainer>
  );
}

export default App;
