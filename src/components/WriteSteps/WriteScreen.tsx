// WriteScreen.js
import React, { useState } from "react";
import WriteStep1 from "./components/WriteSteps/WriteStep1";
import WriteStep2 from "./components/WriteSteps/WriteStep2";

export default function WriteScreen() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const nextStep = (data) => {
    setSelectedDate(data.date);
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  function handleFormSubmit(formData) {
    // Faça algo com os dados do formulário, por exemplo, envie para um servidor
    console.log(formData);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {step === 1 ? (
        <WriteStep1 onNext={nextStep} selectedDate={selectedDate} />
      ) : null}
      {step === 2 ? <WriteStep2 onSubmit={handleFormSubmit} /> : null}
    </div>
  );
}
