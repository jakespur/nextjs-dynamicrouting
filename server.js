const express = require('express');
const path = require('path');
const next = require('next');

const dev = process.env['NODE_ENV'] !== 'production';

const app = next({ dev });

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.use('/', express.static('public'));

    server.get('/categories/*', (req, res) => {
      return app.render(req, res, '/category');
    });

    server.get('*', (req, res) => {
        return app.render(req, res, '/');
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${PORT} - env ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error(`Unable to start server`, error);
    process.exit(1);
  }
})();
