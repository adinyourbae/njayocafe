// /pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials'; // Perbaikan disini
import { compare } from 'bcryptjs';
import { sql } from '@vercel/postgres';

export default NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
      
        console.log("Login attempt with email:", email);
      
        const user = await sql`
          SELECT * FROM users WHERE email = ${email}
        `;
      
        if (user.length > 0) {
          const passwordMatch = await compare(password, user[0].password);
      
          if (passwordMatch) {
            console.log("Login successful for email:", email);
            return Promise.resolve({ id: user[0].id, email: user[0].email });
          } else {
            console.log("Incorrect password for email:", email);
          }
        } else {
          console.log("User not found for email:", email);
        }
      
        return Promise.resolve(null);
      }
      
    })
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user = token;
      session.redirectTo = '../../index.js'; // Setelah login, arahkan ke halaman beranda
      return session;
    },
  },
});
