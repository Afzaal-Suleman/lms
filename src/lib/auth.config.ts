/**
 * auth.config.ts — Edge-safe auth config (NO Prisma, NO Node.js-only modules)
 * Used by middleware. Must not import PrismaAdapter or prisma client.
 */
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    // Credentials provider with no authorize logic here —
    // the real authorize (with Prisma) lives in auth.ts
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize() {
        // Actual authorization is handled in auth.ts (Node.js runtime)
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/sign-in",
    newUser: "/auth/sign-up",
  },
};
