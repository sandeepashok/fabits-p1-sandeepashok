import styled from "@emotion/styled/macro";
import MobileScreenContent from "./components/screens/MobileScreen";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #B0CBFF;
  
`

function App() {
  return (
    <AppContainer>
      <MobileScreenContent />
    </AppContainer>
  );
}

export default App;
