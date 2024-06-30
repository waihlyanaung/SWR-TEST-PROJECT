import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const server = jsonServer.create();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Path to your db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(4000, () => {
  console.log('JSON Server is running on port 4000');
});
