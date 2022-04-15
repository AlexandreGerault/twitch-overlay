import { SubscribeAlert as SubscribeAlertType } from "../../types/Alert";

interface Props {
  alert: SubscribeAlertType;
}

function messageForMonths(cumulated: number, successive?: number | undefined) {
  if (cumulated === 1) {
    return "C'est son premier mois !";
  }

  if (successive && successive > 1) {
    return `C'est son ${cumulated}ème mois, dont ${successive} de suite !`;
  }

  return `C'est son ${cumulated}ème mois !`;
}

export default function SubscribeAlert({ alert }: Props) {
  return (
    <div className="px-6 py-4 shadow rounded">
      {alert.payload.username} vient de s'abonner.{" "}
      {messageForMonths(
        alert.payload.cumulatedMonths,
        alert.payload.successiveMonths
      )}
    </div>
  );
}
