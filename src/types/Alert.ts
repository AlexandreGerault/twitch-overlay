export interface FollowAlert extends BasicAlert {
  type: "FOLLOW";
  payload: {
    username: string;
  };
}

export interface SubscribeAlert extends BasicAlert {
  type: "SUBSCRIBE";
  payload: {
    username: string;
    cumulatedMonths: number;
    successiveMonths?: number;
  };
}

export interface CheersAlert extends BasicAlert {
  type: "CHEERS";
  payload: {
    username: string;
    cheersAmount: number;
  };
}

export interface RaidAlert extends BasicAlert {
  type: "RAID";
  payload: {
    raider: string;
    viewersAmount: number;
  };
}

export interface HostAlert extends BasicAlert {
  type: "HOST";
  payload: {
    host: string;
    viewersAmount?: number;
  };
}

export interface BasicAlert {
  id: number;
  show: boolean;
}

export type Alert =
  | FollowAlert
  | SubscribeAlert
  | CheersAlert
  | RaidAlert
  | HostAlert;
