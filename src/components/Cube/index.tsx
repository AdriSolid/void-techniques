import * as React from "react";
import "./style.scss";

const Cube:React.FC = () => (
    <div className="cube-container">
       <div>
        <figure className="back" />
        <figure className="left" />
        <figure className="bottom" />
        <figure className="front" />
        <figure className="right" />
        <figure className="top" />
       </div>
    </div>
);

export default Cube;
