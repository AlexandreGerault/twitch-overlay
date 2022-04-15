import { useSelector } from "react-redux";
import { RootState } from "../core/store";
import Alert from "./Alert";

export default function Alerts() {
  const alerts = useSelector((state: RootState) => state.alerts);

  return (
    <div className="flex flex-col-reverse items-end gap-4">
      {alerts.map((alert) => (
        <Alert alert={alert} key={alert.id} />
      ))}
    </div>
  );
}
