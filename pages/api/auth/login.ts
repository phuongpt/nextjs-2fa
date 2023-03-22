// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';
import { fakeUsers } from '../../../api/data/fake-users';
import { addToken } from '../../helper';


type Data = {
    success: boolean,
    error?: string,
    token?: string,
    refreshToken?: string | null,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // Check if it's a POST request
    if (req.method === 'POST') {
        const { email, password } = req.body;

        const code = req.headers["x-2fa"] || "";

        // Find user by username and password
        const user = fakeUsers.find(
            (u) => u.email === email && process.env.DEFAULT_PASSWORD === password
        );

        if (user) {
            // Generate JWT token
            let refreshToken = null;
            const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });

            if (code.length > 0) {
                if (code === process.env.DEFAULT_CODE) {
                    refreshToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                        expiresIn: '7d',
                    });

                    if (refreshToken) {
                        addToken(refreshToken);
                    }
                } else {
                    res.status(401).json({ success: false, error: 'Invalid code' });
                }

            }

            res.status(200).json({ success: true, token: accessToken, refreshToken });

        } else {
            res.status(401).json({ success: false, error: 'Invalid username or password' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method not allowed' });
    }
}


