import { Container } from "./styles";
import Called from "../components/Called";
import Header from "../components/Header";
import Register from "../components/Register";


function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Called/>
        <Register/>
      </Container>
    </div>
  );
}

export default App;
