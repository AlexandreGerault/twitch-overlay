import { Transition } from "@headlessui/react";
import { Alert as AlertType } from "../types/Alert";
import SubscribeAlert from "./Alerts/SubscribeAlert";
import FollowAlert from "./Alerts/FollowAlert";
import HostAlert from "./Alerts/HostAlert";
import CheersAlert from "./Alerts/CheersAlert";
import RaidAlert from "./Alerts/RaidAlert";

interface Props {
  alert: AlertType;
}

function DispatchAlert({ alert }: { alert: AlertType }) {
  switch (alert.type) {
    case "SUBSCRIBE":
      return <SubscribeAlert alert={alert} />;
    case "HOST":
      return <HostAlert alert={alert} />;
    case "CHEERS":
      return <CheersAlert alert={alert} />;
    case "RAID":
      return <RaidAlert alert={alert} />;
    case "FOLLOW":
      return <FollowAlert alert={alert} />;
  }
}

export default function Alert({ alert }: Props) {
  return (
    <Transition
      appear={true}
      show={alert.show}
      enter="transition duration-250"
      enterFrom="opacity-0 -translate-x-32 scale-50"
      enterTo="opacity-100 translate-x-0 scale-100"
      leave="transition duration-250"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <DispatchAlert alert={alert} />
    </Transition>
  );
}
