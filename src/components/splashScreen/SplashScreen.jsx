import { LOGO } from "src/utils/constants/constants";
import "src/components/splashScreen/SplashScreen.component.scss";

const SplashScreen = () => {
  return (
    <div className="centered-element">
      <img src={LOGO} alt="Logo" />
      <h1 className="splash-text">Todos</h1>
    </div>
  );
};

export default SplashScreen;
