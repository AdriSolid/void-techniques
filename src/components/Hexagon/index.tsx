import * as React from "react";
import "./style.scss";

const Hexagon: React.FC = () => (
    <svg width="150" height="150">
        <polygon className="hexagon" points="150,75 112.5,140 37.5,140 0,75 37.5,10 112.5,10" />
    </svg>
);

export default Hexagon;
