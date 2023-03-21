import type { NextApiRequest, NextApiResponse } from 'next'
import { fakeUsers } from '../../../api/data/fake-users';
import { User } from '../../../types';
import { getAuthentication } from '../../helper';

type Data = {
    success: boolean,
    error?: string,
    data?: User
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const auth = getAuthentication(req.headers.authorization || "");

        if (!auth) {
            return res.status(401).json({ success: false, error: 'Unauthorized' });
        }

        const currentUser = fakeUsers.find(u => u.id === auth.id);

        return res.status(200).json({ success: true, data: currentUser })
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message })
    }
}
