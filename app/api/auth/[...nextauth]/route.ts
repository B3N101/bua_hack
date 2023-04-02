import NextAuth, { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { github_id, github_secret } from "@/config";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
        clientId: github_id,
        clientSecret: github_secret,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
