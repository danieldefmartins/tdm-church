"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  label?: string;
  light?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownTimer({
  targetDate,
  label,
  light = false,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <div>
      {label && (
        <p
          className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 ${
            light ? "text-secondary" : "text-secondary"
          }`}
        >
          {label}
        </p>
      )}
      <div className="flex gap-3 sm:gap-4">
        {units.map((unit) => (
          <div
            key={unit.label}
            className={`text-center px-3 sm:px-5 py-3 sm:py-4 rounded-xl ${
              light
                ? "bg-white/10 backdrop-blur-sm"
                : "bg-primary/5 border border-primary/10"
            }`}
          >
            <p
              className={`text-2xl sm:text-4xl font-bold tabular-nums ${
                light ? "text-white" : "text-primary"
              }`}
            >
              {String(unit.value).padStart(2, "0")}
            </p>
            <p
              className={`text-[10px] sm:text-xs uppercase tracking-wider mt-1 ${
                light ? "text-white/60" : "text-stone-500"
              }`}
            >
              {unit.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
