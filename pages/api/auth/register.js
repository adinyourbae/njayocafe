// pages/api/auth/register.js
import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcryptjs';
import { sql } from '@vercel/postgres';
export default async function handler(req = NextApiRequest, res = NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { email, password } = await req.body;

        console.log({ email,password });

        const hashedPassword = await hash(password, 10);

        const response = await sql`
        INSERT INTO users (email, password)
        VALUES (${email}, ${hashedPassword})
        `;
        // Validate email and password
        // Your validation logic here

        // Assuming validation passed, you may want to save the user to the database or perform other actions

        // Respond with success message
        res.status(200).json({ message: 'success' });
      } catch (error) {
        console.error({ error });
        res.status(500).json({ message: 'Internal Server Error' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }

  return 
}
