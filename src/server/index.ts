import { env } from '@/server/lib/env';
import next from 'next';
import http from 'node:http';

const app = next({ dev: env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(async () => {
    const server = http.createServer((req, res) => {
      handle(req, res);
    });

    server.listen(env.PORT, env.HOST);
    console.info(`Server started: http://${env.HOST}:${env.PORT}`);
  })
  .catch((e) => console.error('Main Server Error:', e));
