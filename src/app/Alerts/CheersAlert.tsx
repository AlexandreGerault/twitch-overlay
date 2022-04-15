import { CheersAlert as CheersAlertType } from "../../types/Alert";

interface Props {
  alert: CheersAlertType;
}

export default function CheersAlert({ alert }: Props) {
  return (
    <div className="px-6 py-4 shadow rounded">
      {alert.payload.username} vient de lâcher {alert.payload.cheersAmount}{" "}
      cheers !
    </div>
  );
}
