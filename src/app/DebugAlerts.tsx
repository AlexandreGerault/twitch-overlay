import { receiveAlert } from "../core/store/slices/alerts/useCases";
import Button from "./Button";
import { useAppDispatch } from "./hooks";

export default function DebugAlerts() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-4">
      <Button
        onClick={() =>
          dispatch(
            receiveAlert({
              id: Math.floor(Math.random() * 99999),
              show: true,
              type: "HOST",
              payload: { host: "M. Moi" },
            })
          )
        }
      >
        Simuler un host
      </Button>
      <Button
        onClick={() =>
          dispatch(
            receiveAlert({
              id: Math.floor(Math.random() * 99999),
              show: true,
              type: "RAID",
              payload: { raider: "Mickael", viewersAmount: 12 },
            })
          )
        }
      >
        Simuler un raid
      </Button>
      <Button
        onClick={() =>
          dispatch(
            receiveAlert({
              id: Math.floor(Math.random() * 99999),
              show: true,
              type: "SUBSCRIBE",
              payload: {
                username: "Gunnolfson",
                cumulatedMonths: 0,
                successiveMonths: 12,
              },
            })
          )
        }
      >
        Simuler un sub
      </Button>
      <Button
        onClick={() =>
          dispatch(
            receiveAlert({
              id: Math.floor(Math.random() * 99999),
              show: true,
              type: "FOLLOW",
              payload: { username: "Gunnolfson" },
            })
          )
        }
      >
        Simuler un follow
      </Button>
      <Button
        onClick={() =>
          dispatch(
            receiveAlert({
              id: Math.floor(Math.random() * 99999),
              show: true,
              type: "CHEERS",
              payload: { username: "Jeremy", cheersAmount: 123 },
            })
          )
        }
      >
        Simuler un cheers
      </Button>
    </div>
  );
}
