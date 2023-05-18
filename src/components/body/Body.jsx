import Navbar from "src/components/navbar/Navbar";
import Content from "src/components/content/Content";
import { Fragment } from "react";

const Body = () => {
  return (
    <Fragment>
      <Navbar />
      <Content />
    </Fragment>
  );
};

export default Body;
