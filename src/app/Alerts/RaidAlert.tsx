import { RaidAlert as RaidAlertType } from "../../types/Alert";

interface Props {
  alert: RaidAlertType;
}

export default function RaidAlert({ alert }: Props) {
  return (
    <div className="px-6 py-4 shadow rounded">
      {alert.payload.raider} lance l'assaut avec {alert.payload.viewersAmount}{" "}
      spectateurs !
    </div>
  );
}
