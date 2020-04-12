import * as React from "react";
import "./style.scss";

const VoidText: React.FC<{ text: string }> = ({ text }): any => <span className="void-text">{text}</span>;

export default VoidText;
