import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { getAuthentication, getToken } from '../../helper';

type Data = {
    success: boolean,
    error?: string,
    message?: string,
}

export default async function logout(req: NextApiRequest, res: NextApiResponse) {

    try {
        const authHeader = req.headers.authorization || "";
        const auth = getAuthentication(authHeader);


        if (!auth) {
            return res.status(401).json({ success: false, error: 'Unauthorized' });
        }

        jwt.destroy(getToken(authHeader))

        return res.status(200).json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}