import io from "socket.io-client";
import { AppDispatch } from "../core/store";
import { receiveAlert } from "../core/store/slices/alerts/useCases";
import {
  CheersAlert,
  FollowAlert,
  HostAlert,
  RaidAlert,
  SubscribeAlert,
} from "../types/Alert";

export function start(socketToken: string, dispatch: AppDispatch) {
  const streamlabs = io(`https://sockets.streamlabs.com?token=${socketToken}`, {
    transports: ["websocket"],
  });

  //Perform Action on event
  streamlabs.on("event", (eventData) => {
    console.log({ eventData });
    if (eventData.for === "twitch_account") {
      switch (eventData.type) {
        case "follow": {
          const alert: FollowAlert = {
            id: eventData.event_id,
            show: true,
            payload: { username: eventData.message[0].name },
            type: "FOLLOW",
          };
          dispatch(receiveAlert(alert));
          break;
        }

        case "subscription": {
          const alert: SubscribeAlert = {
            id: eventData.event_id,
            show: true,
            payload: {
              username: eventData.message[0].name,
              cumulatedMonths: eventData.message[0].months,
            },
            type: "SUBSCRIBE",
          };

          dispatch(receiveAlert(alert));
          break;
        }

        case "resub": {
          const alert: SubscribeAlert = {
            id: eventData.event_id,
            show: true,
            payload: {
              username: eventData.message[0].name,
              cumulatedMonths: eventData.message[0].months,
              successiveMonths: eventData.message[0].streak_months,
            },
            type: "SUBSCRIBE",
          };

          dispatch(receiveAlert(alert));
          break;
        }

        case "host": {
          const alert: HostAlert = {
            id: eventData.event_id,
            show: true,
            payload: {
              host: eventData.message[0].name,
              viewersAmount: eventData.message[0].viewers,
            },
            type: "HOST",
          };

          dispatch(receiveAlert(alert));
          break;
        }

        case "raid": {
          const alert: RaidAlert = {
            id: eventData.event_id,
            show: true,
            payload: {
              raider: eventData.message[0].name,
              viewersAmount: eventData.message[0].raiders,
            },
            type: "RAID",
          };

          dispatch(receiveAlert(alert));
          break;
        }

        case "bits": {
          const alert: CheersAlert = {
            id: eventData.event_id,
            show: true,
            payload: {
              username: eventData.message[0].name,
              cheersAmount: eventData.message[0].amount,
            },
            type: "CHEERS",
          };

          dispatch(receiveAlert(alert));
          break;
        }

        default:
          //default case
          console.log({ eventData });
      }
    }
  });

  return {
    streamlabs,
    stop() {
      streamlabs.disconnect();
    },
  };
}
