// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';
import { fakeUsers } from '../../../api/data/fake-users';

type Data = {
    success: boolean,
    error?: string,
    token?: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.debug("[Server] login", req.body);
    // Check if it's a POST request
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Find user by username and password
        const user = fakeUsers.find(
            (u) => u.email === email //&& u.password === password
        );

        if (user) {
            // Generate JWT token
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });
            res.status(200).json({ success: true, token });
        } else {
            res.status(401).json({ success: false, error: 'Invalid username or password' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method not allowed' });
    }
}


