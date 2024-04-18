import { useState } from "react";
import { useSession } from "next-auth/react";

interface PostData {
  title: string;
  content: string;
  date: Date;
  googleId: string;
}

interface ApiResponse {
  message?: string;
  data?: any;
}

export const useCreatePost = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const { data: session, status } = useSession();

  const createPost = async (postData: PostData) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      if (status === "authenticated" && session) {
        postData.googleId = session.user.id;

        const response = await fetch("http://localhost:3001/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.user.accessToken}`,
          },
          body: JSON.stringify(postData),
        });

        const responseData: ApiResponse = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message || "Erro ao criar a postagem");
        }

        setResponse(responseData);
      } else {
        throw new Error(
          "Usuário não autenticado ou token de acesso não disponível"
        );
      }
    } catch (error) {
      setError(error.message || "Erro ao criar a postagem");
    } finally {
      setIsLoading(false);
    }
  };

  return { createPost, isLoading, error, response };
};
