import { FollowAlert as FollowAlertType } from "../../types/Alert";
import { useAudio } from "../hooks";
import followAudio from "../../../assets/sounds/positive_notification.wav";

interface Props {
  alert: FollowAlertType;
}

export default function FollowAlert({ alert }: Props) {
  useAudio(followAudio);

  return (
    <div className="px-6 py-4 shadow rounded bg-white">
      {alert.payload.username} nous a finalement rejoint !
    </div>
  );
}
