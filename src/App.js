import { Header, MainPanel, NFTDisplay } from "./components";
import { Container } from "./components/ui";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <NFTDisplay />
        <MainPanel />
      </Container>
    </div>
  );
}

export default App;
