// configuaracion del servidor
const http = require('http');
const app = require('../app');
// CONFIG.env
require('dotenv').config();



const serve = http.createServer(app);

let PORT = process.env.PORT || 3000;
serve.listen(PORT, () => {
    console.log(`servidor ecuchando en port ${PORT}`);
});