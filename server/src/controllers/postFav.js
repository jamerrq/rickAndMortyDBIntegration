const { Favorite } = require('../DB_connection');


const postFav = async (req, res) => {
    // Recibo name, origin, status, image, species y gender por body
    const { id, name, origin, status, image, species, gender } = req.body;
    // Si no recibo alguno de los datos, devuelvo un error 401 con
    // mensaje 'Faltan datos'
    if (!id || !name || !origin || !status || !image || !species || !gender) {
        return res.status(401).send({ message: 'Faltan datos' });
    }
    // Si todo está ok, creo el favorito en la base de datos
    try {
        const fav = await Favorite.create({
            id,
            name,
            origin,
            status,
            image,
            species,
            gender,
        });
        // Una vez guardado, devuelvo todos los favoritos del usuario
        const favs = await Favorite.findAll();
        return res.status(201).send({ favs });
    }
    // Si hay un error, devuelvo un error 500
    catch (error) {
        return res.status(500).send({
            message: 'Error al crear favorito', error
        });
    }
};


module.exports = postFav;
