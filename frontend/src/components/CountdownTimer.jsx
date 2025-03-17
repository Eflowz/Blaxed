import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endDate, onTimerEnd }) => {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(endDate);
      const diff = end - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setRemainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setRemainingTime('Offer Ended');
        clearInterval(interval);
        if (onTimerEnd) {
          onTimerEnd(); // Call the callback when the timer ends
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate, onTimerEnd]);

  return (
    <div className="text-lg font-medium text-gray-800">
      {remainingTime ? (
        <p>{remainingTime}</p>
      ) : (
        <p>Ends in 2 days</p>
      )}
    </div>
  );
};

export default CountdownTimer;
