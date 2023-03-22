import { NextApiRequest, NextApiResponse } from 'next';
import { revokeToken } from '../../helper';

type Data = {
    success: boolean,
    error?: string,
    message?: string,
}

export default async function logout(req: NextApiRequest, res: NextApiResponse<Data>) {

    try {
        if (req.method === 'DELETE') {
            const { token } = req.body;
            if (!token) {
                return res.status(401).json({ success: false, error: 'Unauthorized' });
            }

            revokeToken(token);

            return res.status(200).json({ success: true, message: 'Logged out successfully' });
        } else {
            res.status(405).json({ success: false, error: 'Method not allowed' });
        }

    } catch (error) {
        res.status(405).json({ success: false, error: error.message });
    }
}