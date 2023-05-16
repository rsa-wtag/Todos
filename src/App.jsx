import React, { useEffect, useState } from "react";
import "src/App.css";
import Tasks from "src/components/tasks/Tasks";
import TaskItems from "src/components/tasks/TaskItems";
import SplashScreen from "./components/tasks/splashScreen/SplashScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div>
          <Tasks />
          <TaskItems />
        </div>
      )}
    </div>
  );
}

export default App;
