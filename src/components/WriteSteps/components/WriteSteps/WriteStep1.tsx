// WriteStep1.js
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function WriteStep1({ onNext, selectedDate }) {
  const [date, setDate] = useState<Date | undefined>(selectedDate);

  const handleNext = () => {
    onNext({ date });
  };

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-2xl mb-10">Selecione um Dia</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
