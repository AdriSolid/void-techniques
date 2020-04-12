import * as React from "react";
import "./App.scss";
import Header from "./components/Header";
import Dock from "./components/Dock";
import Container from "./components/Container";
import Cell from "./components/Cell";
import Footer from "./components/Footer";
import Hexagon from "./components/Hexagon";
import VoidText from "./components/VoidText";
import Squares from "./components/Squares";
import Cube from "./components/Cube";
import Circle from "./components/Circle";
import Platforms from "./components/Platforms";
  
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Cell>
          <Hexagon />
        </Cell>
        <Cell>
          <VoidText text="Void" />
        </Cell>
        <Cell>
          <Squares />
        </Cell>
        <Cell>
          <Cube />
        </Cell>
        <Cell>
          <Circle />
        </Cell>
        <Cell>
          <Platforms />
        </Cell>
        <Cell>
          <Dock />
        </Cell>
        <Cell>
          <VoidText text="ENTER" />
        </Cell>
      </Container>
      <Footer />
    </>
  );
};

export default App;
