import * as React from "react";
import { getChildren } from "../../utils/getChildren";
import "./style.scss";

const Container:React.FC<{ children?: any }> = ({ children }) => {

  const childs = getChildren(children);
  
  return (
    <div className="container">
      {childs && childs.map((child, index) => {
        if (child.props && child.props.type && child.props.type === "tabs") {
          return <div
            key={`container-tabs-${index}`}
            className="container__tabs">
            {child}
          </div>
        } else {
          return <div
            key={`container-child-${index}`}
            className="container__child">
            {child}
          </div>
        }
      })}
    </div>
  );
};

export default Container;
