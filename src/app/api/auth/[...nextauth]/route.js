import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Using string concatenation for the URL
        const res = await fetch(process.env.NEXTAUTH_URL + "/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        // Additional fields for doctor application
        token.appliedDoctor = user.appliedDoctor || false;
        token.doctorCvUrl = user.doctorCvUrl || "";
        token.doctorImageUrl = user.doctorImageUrl || "";
        token.doctorCategory = user.doctorCategory || "";
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.role = token.role;
      // Pass doctor related fields to session
      session.user.appliedDoctor = token.appliedDoctor;
      session.user.doctorCvUrl = token.doctorCvUrl;
      session.user.doctorImageUrl = token.doctorImageUrl;
      session.user.doctorCategory = token.doctorCategory;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
