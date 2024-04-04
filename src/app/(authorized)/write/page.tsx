"use client";
import StatsCount from "@/components/Stats/StatsCount";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useState } from "react";
import WriteScreen from "@/components/WriteSteps/WriteScreen";

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto sm:px-2 px-5 mt-[5rem] mb-[2rem] sm:mt-20 sm:mb-0 ">
      <WriteScreen />
    </div>
  );
}
