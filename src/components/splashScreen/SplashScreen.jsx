import { LOGO, LOGO_TEXT } from "src/utils/constants/constants";
import "src/components/splashScreen/SplashScreen.component.scss";

const SplashScreen = () => {
  return (
    <div className="centered-element">
      <img src={LOGO} alt={LOGO_TEXT} />
      <h1 className="splash-text">Todos</h1>
    </div>
  );
};

export default SplashScreen;
