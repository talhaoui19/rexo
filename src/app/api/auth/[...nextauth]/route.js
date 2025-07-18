import { ConnectToDb } from "@/lib/db";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userModel from "@/lib/models/user";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(c) {
        try {
          await ConnectToDb();
          const user = await userModel.findOne({ email: c.email });
          console.log("USER FROM DB:", user);
          if (!user) return null;

          const passMatch = await bcrypt.compare(c.password, user.password);
          if (!passMatch) return null;

          return {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            bio: user.bio,
          };
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  httpOptions: {
    timeout: 10000,
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.picture = user.image;
        token.bio = user.bio;
      }

      if (account && profile) {
        token.email = profile.email;
        token.firstName = profile.firstName;
        token.lastName = profile.lastName;
        token.picture = profile.picture;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.email = token.email;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.image = token.picture;
      session.user.bio = token.bio;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
