import { useEffect } from "react";
import Alerts from "./Alerts";
import DebugAlerts from "./DebugAlerts";
import { useSearchParams } from "react-router-dom";
import { start } from "../PrimaryAdapters/Streamlabs";
import { useAppDispatch } from "./hooks";

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
      <Alerts />
    </div>
  );
}

export default App;
