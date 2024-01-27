import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Header from "./components/Header";
import LifeCycle from "./components/LifeCycle";
import Request from "./components/Request";
function App() {
  const name = "test";

  return (
    <>
      <Header />
      <Button title="Değiştir" stil="btn-primary" />
      <Button title="Sil" stil="btn-danger" />
      <Counter />
      <LifeCycle />
      <Request />
    </>
  );
}

export default App;
