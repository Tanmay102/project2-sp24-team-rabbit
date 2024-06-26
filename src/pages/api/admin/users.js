import getUsers from "../../../../server/mongodb/actions/getUsers";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const users = await getUsers();
            const filteredUsers = users.map(user => ({
                fullName: user.fullName,
                email: user.email,
                admin: user.admin
            }));
            return res.status(200).send(filteredUsers);
        } catch (error) {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}