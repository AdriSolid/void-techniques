import * as React from "react";
import "./App.scss";
import Title from "./components/Title";
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
      <Title />
      <Container>
        <Cell>
          <Hexagon />
        </Cell>
        <Cell>
          <VoidText />
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
          
        </Cell>
        <Cell>
          
        </Cell>
        <Cell>
         
        </Cell>
        <Cell>
          
        </Cell>
        <Cell>
          
        </Cell>
      </Container>
      <Footer />
    </>
  );
};

export default App;
