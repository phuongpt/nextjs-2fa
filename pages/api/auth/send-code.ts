import { NextApiRequest, NextApiResponse } from "next/types";


type Data = {
    success: boolean,
    error?: string,
    message?: string,
}
type TwoFactorType = 'EMAIL' | 'SMS'

interface SendCodeRequestBody {
    twoFactorType: TwoFactorType
}

interface SendCodeResponseBody {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const requestBody: SendCodeRequestBody = req.body

        // TODO: Implement logic to send the 2FA code via email or SMS

        const message = `2FA code sent via ${requestBody.twoFactorType}`

        return res.status(200).json({ success: true, message })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}