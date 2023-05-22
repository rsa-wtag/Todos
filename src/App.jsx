import Content from "src/components/content/Content";
import Navbar from "src/components/navbar/Navbar";
import "src/assets/styles/styles.scss";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Content />
    </Fragment>
  );
}

export default App;
