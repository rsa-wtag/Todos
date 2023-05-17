import logo from "src/assets/images/logo.png";
import "src/components/splashScreen/SplashScreen.component.scss";

const SplashScreen = () => {
  return (
    <div className="centered-element">
      <img src={logo} alt="Logo" />
      <h1 className="splash-text">Todos</h1>
    </div>
  );
};

export default SplashScreen;
