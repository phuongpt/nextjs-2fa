import jwt from 'jsonwebtoken';

// This is a fake user data array
const users = [
    {
        id: 1,
        username: 'user',
        password: 'password',
        role: 'user'
    },
    {
        id: 2,
        username: 'admin',
        password: 'password',
        role: 'admin'

    },
];

export default function handler(req, res) {
    // Check if it's a POST request
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Find user by username and password
        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            // Generate JWT token
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });

            // Return token in response
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
