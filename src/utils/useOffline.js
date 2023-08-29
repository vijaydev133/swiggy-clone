import { useState, useEffect } from "react";

function useOffline() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOffListener = () => {
      setIsOffline(true);
    };
    const handleOnListener = () => {
      setIsOffline(false);
    };
    window.addEventListener("offline", handleOffListener);
    window.addEventListener("online", handleOnListener);

    return () => {
      window.removeEventListener("offline", handleOffListener);
      window.removeEventListener("offline", handleOnListener);
    };
  }, []);

  return isOffline;
}

export default useOffline;
