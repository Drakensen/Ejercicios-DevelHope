import { useState, useEffect } from "react";

const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setLoading(false);
            resolve(position);
          },
          (error) => {
            setLoading(false);
            setError(error);
            reject(error);
          }
        );
      });
    } else {
      setError({
        message: "Geolocation is not supported by this browser.",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { currentLocation, loading, error, getLocation };
};

export default useCurrentLocation;