// WriteScreen.js
import React, { useState } from "react";
import WriteStep1 from "./components/WriteSteps/WriteStep1";
import WriteStep2 from "./components/WriteSteps/WriteStep2";
import { useSession } from "next-auth/react";
import { useCreatePost } from "@/hooks/useCreatePost";

export default function WriteScreen() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const { data: session, status } = useSession();
  const { createPost, isLoading, error, response } = useCreatePost();

  const nextStep = (data) => {
    setSelectedDate(data.date);
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  async function handleFormSubmit(formData) {
    // Adicionando selectedDate ao formData
    formData.date = selectedDate;

    try {
      await createPost(formData); // Chamada para criar a postagem
      // Se você deseja fazer algo após a postagem ser criada com sucesso,
      // você pode adicionar isso aqui, por exemplo, redirecionar o usuário para outra página.
    } catch (error) {
      console.error("Erro ao criar a postagem:", error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {step === 1 ? (
        <WriteStep1 onNext={nextStep} selectedDate={selectedDate} />
      ) : null}
      {step === 2 ? (
        <WriteStep2 onSubmit={handleFormSubmit} isLoading={isLoading} />
      ) : null}
      {error && <p>{error}</p>}
    </div>
  );
}
