import * as React from "react";
import "./App.scss";
import Title from "./components/Title";
import Container from "./components/Container";
// import Tabs from "./WebsiteComponents/Tabs";
import Cell from "./components/Cell";
import Footer from "./components/Footer";
// import CONFIG from "./config";
import Hexagon from "./components/Hexagon";
import VoidText from "./components/VoidText";
import Squares from "./components/Squares";
import Cube from "./components/Cube";
import Circle from "./components/Circle";

const App = () => {
  return (
    <>
      <Title />
      {/* <Container>
        <Tabs
          key="tabs"
          type="tabs"
          componentInfo={CONFIG.COMPONENTS_INFO}
        />
      </Container> */ }
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
