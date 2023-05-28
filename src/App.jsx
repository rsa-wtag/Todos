import { Fragment } from "react";
import Content from "src/components/content/Content";
import Navbar from "src/components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "src/assets/styles/styles.scss";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Content />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
