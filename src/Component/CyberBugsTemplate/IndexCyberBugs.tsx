import React from "react";
import Header from "../../Component/CyberBugsTemplate/Header";
import Info from "../../Component/CyberBugsTemplate/Info";
import Content from "../../Component/CyberBugsTemplate/Content";
type Props = {};

const IndexCyberBugs = (props: Props) => {
  return (
    <div>
      <div className="main">
        <Header />
        <h3>Cyber Board</h3>
        <Info />
        <Content />
      </div>
    </div>
  );
};

export default IndexCyberBugs;
