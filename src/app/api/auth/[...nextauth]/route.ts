import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

const handler = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (user && account) {
        token.accessToken = account.access_token;
        token.id = user?.id;

        console.log(token.accessToken);

        try {
          const response = await axios.post(
            "http://localhost:3001/users/login",
            {
              googleID: user.id,
              name: user.name,
              email: user.email,
            },
            {
              headers: {
                Authorization: `Bearer ${token.accessToken}`,
              },
            }
          );
          console.log(
            "Requisição para o backend enviada com sucesso!",
            response.data
          );
        } catch (error) {
          console.error("Erro ao fazer requisição para o backend:", error);
        }
      }

      return token;
    },
  },
});
export { handler as GET, handler as POST };
