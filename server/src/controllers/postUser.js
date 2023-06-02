const { User } = require('../DB_connection');


const postUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ message: 'Faltan datos' });
    }
    try {
        const user = await User.create({ email, password });
        return res.status(201).send({ message: 'Usuario creado', user });
    }
    catch (error) {
        return res.status(500).send({
            message: 'Error al crear usuario', error
        });
    }
};


module.exports = postUser;
