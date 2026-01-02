import React, { useEffect, useState } from "react";

function useCheckOnlineStatus() {
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  }, []);

  return onlineStatus;
}

export default useCheckOnlineStatus;
