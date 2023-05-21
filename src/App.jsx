import React, { useEffect, useState } from "react";
import "src/assets/styles/styles.scss";
import SplashScreen from "src/components/splashScreen/SplashScreen";
import Body from "src/components/body/Body";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  function setIsLoadingFalse() {
    setIsLoading(false);
  }

  function handleTimeout() {
    setTimeout(setIsLoadingFalse, 1000);
  }
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return <div className="App">{isLoading ? <SplashScreen /> : <Body />}</div>;
}

export default App;
