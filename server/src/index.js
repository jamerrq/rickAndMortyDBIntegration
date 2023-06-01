// Bring server from app.js
const server = require('./app');
// Port
const PORT = 3001;
// conn
const { conn } = require('./DB_connection');

// Sync
conn.sync({ force: true }).then(() => {
    // Listen server
    server.listen(PORT, () => {
        console.log(`Server raised on port ${PORT}`);
    });
});
