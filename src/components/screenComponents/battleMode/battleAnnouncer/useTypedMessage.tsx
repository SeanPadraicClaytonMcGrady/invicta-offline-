import { useEffect, useState } from "react";
import { wait } from "../sharedTools/wait";

export const useTypedMessage = (message) => {
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    setTypedMessage("");

    if (message.length) {
      (async () => {
        let visibleMessage = "";

        for (let i = 0; i < message.length; i++) {
          await wait(60);
          visibleMessage = visibleMessage + message[i];
          setTypedMessage(visibleMessage);
        }
      })();
    }
  }, [message]);

  return typedMessage;
};
