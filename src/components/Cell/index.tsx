import * as React from "react";
import { getChildren } from "../../utils/getChildren";
import "./style.scss";

const Cell:React.FC<{ children?: any }> = ({ children }) => {

  const childs = getChildren(children);
  
  return (
    <div className="cell">
      {childs && childs.map(child => child)}
    </div>
  );
};

export default Cell;
