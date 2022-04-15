import { FollowAlert as FollowAlertType } from "../../types/Alert";

interface Props {
  alert: FollowAlertType;
}

export default function FollowAlert({ alert }: Props) {
  return (
    <div className="px-6 py-4 shadow rounded">
      {alert.payload.username} nous a finalement rejoint !
    </div>
  );
}
