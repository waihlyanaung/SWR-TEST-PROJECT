import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const server = jsonServer.create();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use relative path for db.json
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();


server.use(middlewares);
server.use('/api', router); // Add /api prefix to routes
server.listen(4000, () => {
  console.log('JSON Server is running on port 4000');
});
