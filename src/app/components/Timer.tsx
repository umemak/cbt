import * as React from 'react';
import { Label } from 'semantic-ui-react';

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = React.useState(300);
  const tick = () => {
    setTimeLeft((prevTime) => (prevTime === 0 ? 300 : prevTime - 1));
  };

  React.useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  const timeLeftMin = Math.floor(timeLeft / 60);
  const timeLeftSec = timeLeft % 60;
  const timeLeftStr = `${timeLeftMin}:${
    timeLeftSec < 10 ? `0${timeLeftSec}` : timeLeftSec
  }`;

  return (
    <>
      <Label icon="clock outline" content={timeLeftStr} size="large" />
    </>
  );
};

export default Timer;
