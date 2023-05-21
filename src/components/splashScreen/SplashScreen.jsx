import "src/components/splashScreen/SplashScreen.component.scss";
import { LOGO, LOGO_TEXT } from "src/utils/constants/constants";

const SplashScreen = () => {
  return (
    <div className="splash">
      <img src={LOGO} alt={LOGO_TEXT} />
      <h1 className="splash__text">Todos</h1>
    </div>
  );
};

export default SplashScreen;
