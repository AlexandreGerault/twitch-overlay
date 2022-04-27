import { RaidAlert as RaidAlertType } from "../../types/Alert";
import { useAudio } from "../hooks";

import followAudio from "../../../assets/sounds/red_alert.wav";

interface Props {
  alert: RaidAlertType;
}

export default function RaidAlert({ alert }: Props) {
  useAudio(followAudio);

  return (
    <div className="px-6 py-4 shadow rounded bg-white">
      {alert.payload.raider} lance l'assaut avec {alert.payload.viewersAmount}{" "}
      spectateurs !
    </div>
  );
}
