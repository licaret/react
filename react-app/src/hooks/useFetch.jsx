import { useEffect, useState } from "react";

function useFetch(url, callbackFct = null) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        if (callbackFct) {
          setData(callbackFct([result]));
        } else {
          setData(result);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      // TODO: Perform cleanup: cancel requests using signal
    };
  }, [url]);

  return { data, setData, isLoading, error };
}

export default useFetch;