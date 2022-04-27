import { CheersAlert as CheersAlertType } from "../../types/Alert";
import { useAudio } from "../hooks";
import dropAudio from "../../../assets/sounds/drop.wav";

interface Props {
  alert: CheersAlertType;
}

export default function CheersAlert({ alert }: Props) {
  useAudio(dropAudio);

  return (
    <div className="px-6 py-4 shadow rounded bg-white">
      {alert.payload.username} vient de lâcher {alert.payload.cheersAmount}{" "}
      cheers !
    </div>
  );
}
