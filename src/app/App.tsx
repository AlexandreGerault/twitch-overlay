import { useEffect } from "react";
import Alerts from "./Alerts";
import { useSearchParams } from "react-router-dom";
import { start } from "../PrimaryAdapters/Streamlabs";
import { useAppDispatch } from "./hooks";
import Webcam from "./Webcam";

function App() {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const secretToken = searchParams.get("secretToken");
    console.log({ secretToken });
    if (secretToken) {
      const { stop } = start(secretToken, dispatch);

      return () => {
        stop();
      };
    }
  });

  return (
    <div className="App">
      {/* <DebugAlerts /> */}
      <Webcam />
      <Alerts />
    </div>
  );
}

export default App;
