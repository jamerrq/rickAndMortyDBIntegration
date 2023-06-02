const { Favorite } = require('../DB_connection');


const deleteFav = async (req, res) => {
    // Recibo id por params
    const { id } = req.params;
    // Si no recibo id, devuelvo un error 400
    if (!id) {
        return res.status(400).send({ message: 'Falta id' });
    };
    // Busco el favorito en la base de datos
    try {
        // Primero busco el favorito por id
        const fav = await Favorite.findByPk(id);
        // Si no existe, devuelvo un error 404
        if (!fav) {
            return res.status(404).send({ message: 'Favorito no encontrado' });
        }
        // Si existe, lo elimino
        await fav.destroy();
        // Devuelvo un mensaje 200 y todos los favoritos del usuario
        let favs = await Favorite.findAll();
        return res.status(200).send({ message: 'Favorito eliminado', favs });
    }
    // Si hay un error, devuelvo un error 500
    catch (error) {
        return res.status(500).send({
            message: 'Error al eliminar favorito', error
        });
    };
};


module.exports = deleteFav;
