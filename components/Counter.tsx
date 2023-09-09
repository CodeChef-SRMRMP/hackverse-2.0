import { useEffect, useState } from "react";

function calculateTimeLeft(
  targetDate: Date
): { days: number; hours: number; minutes: number; seconds: number } | null {
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();

  if (timeDifference <= 0) {
    // Target date has passed
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

const targetDate = new Date("2023-10-27T00:00:00");

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft(targetDate)), 1000);
  }, [timeLeft]);

  return (
    <div className="flex gap-4">
      <div className="w-16 md:w-20 py-3 lg:w-32 flex flex-col justify-center items-center rounded bg-secondary border bg-opacity-10">
        <span className="w-full text-4xl md:text-5xl lg:text-6xl text-center white-space-nowrap overflow-hidden">
          {timeLeft?.days}
        </span>
        <span className="w-full py-0.5 text-xs md:text-sm lg:text-sm uppercase font-bold text-center white-space-nowrap overflow-hidden">
          Days
        </span>
      </div>

      <div className="w-16 md:w-20 py-3 lg:w-32 flex flex-col justify-center items-center rounded bg-secondary border bg-opacity-10">
        <span className="w-full text-4xl md:text-5xl lg:text-6xl text-center white-space-nowrap overflow-hidden">
          {timeLeft?.hours}
        </span>
        <span className="w-full py-0.5 text-xs md:text-sm lg:text-sm uppercase font-bold text-center white-space-nowrap overflow-hidden">
          Hours
        </span>
      </div>

      <div className="w-16 md:w-20 py-3 lg:w-32 flex flex-col justify-center items-center rounded bg-secondary border bg-opacity-10">
        <span className="w-full text-4xl md:text-5xl lg:text-6xl text-center white-space-nowrap overflow-hidden">
          {timeLeft?.minutes}
        </span>
        <span className="w-full py-0.5 text-xs md:text-sm lg:text-sm uppercase font-bold text-center white-space-nowrap overflow-hidden">
          Minutes
        </span>
      </div>

      <div className="w-16 md:w-20 py-3 lg:w-32 flex flex-col justify-center items-center rounded bg-secondary border bg-opacity-10">
        <span className="w-full text-4xl md:text-5xl lg:text-6xl text-center white-space-nowrap overflow-hidden">
          {timeLeft?.seconds}
        </span>
        <span className="w-full py-0.5 text-xs md:text-sm lg:text-sm uppercase font-bold text-center white-space-nowrap overflow-hidden">
          Seconds
        </span>
      </div>
    </div>
  );
};
