declare module "socket.io-client" {
  function io(
    url: string,
    params: object
  ): {
    on: (socketEvent: string, callback: (data: any) => unknown) => unknown;
    disconnect: () => void;
  };

  export = io;
}
