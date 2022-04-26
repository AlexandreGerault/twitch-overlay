import { CheersAlert as CheersAlertType } from "../../types/Alert";
import { useAudio } from "../hooks";

interface Props {
  alert: CheersAlertType;
}

export default function CheersAlert({ alert }: Props) {
  useAudio("drop.wav");

  return (
    <div className="px-6 py-4 shadow rounded bg-white">
      {alert.payload.username} vient de lâcher {alert.payload.cheersAmount}{" "}
      cheers !
    </div>
  );
}
