import { HostAlert as HostAlertType } from "../../types/Alert";

interface Props {
  alert: HostAlertType;
}

export default function HostAlert({ alert }: Props) {
  return (
    <div className="px-6 py-4 shadow rounded">
      {alert.payload.host} nous héberge gracieusement
      {alert.payload.viewersAmount &&
        ` avec ${alert.payload.viewersAmount} spectateurs`}{" "}
      !
    </div>
  );
}
