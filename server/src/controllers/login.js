const { User } = require('../DB_connection');


// Login function
const login = async (req, res) => {
    // Recibo email y password por query
    const { email, password } = req.query;
    // Si no recibo email o password, devuelvo un error 400
    if (!email || !password) {
        return res.status(400).send({ message: 'Faltan datos' });
    }
    // Busco el usuario en la base de datos
    try {
        // Primero busco el usuario por email
        const user = await User.findOne({ where: { email } });
        // Si no existe, devuelvo un error 404
        if (!user) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        // Si existe, comparo la contraseña
        if (user.password !== password) {
            return res.status(403).send({ message: 'Contraseña incorrecta' });
        }
        // Si la contraseña es correcta, devuelvo el usuario
        return res.status(200).send({ access: true });
    }
    // Si hay un error, devuelvo un error 500
    catch (error) {
        return res.status(500).send({
            message: 'Error al buscar usuario', error
        });
    }
};


module.exports = login;
