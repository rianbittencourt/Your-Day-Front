"use client";
import StatsCount from "@/components/Stats/StatsCount";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useState } from "react";


export default function Profile() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div className=" max-w-7xl mx-auto sm:px-5 px-10 mb-[10rem] sm:mb-0">
      <div className="mt-10 ">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Selecione um Dia</h1>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </div>
  );
}
