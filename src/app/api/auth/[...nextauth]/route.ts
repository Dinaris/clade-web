import NextAuth, { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    {
      id: "worldcoin",
      name: "Worldcoin",
      type: "oauth",
      wellKnown: "https://id.worldcoin.org/.well-known/openid-configuration",
      authorization: { params: { scope: "profile openid" } },
      clientId: process.env.NEXT_PUBLIC_WORLDCOIN_CLIENT_ID,
      clientSecret: process.env.WORLDCOIN_CLIENT_SECRET,
      idToken: true,
      profile(profile: any) {
        console.log('profile worldcoin: ', profile);
        return {
          id: profile.sub,
          name: profile.sub,
        };
      },
    },
    Auth0Provider({
      clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
      authorization: { params: { scope: "profile openid email name" } },
      profile(profile: any, tokens: any) {
        console.log("profile auth0: ", profile);
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
