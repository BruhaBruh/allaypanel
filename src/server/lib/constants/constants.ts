import Dockerode from 'dockerode';
import path from 'node:path';

export const BASE_PATH =
  process.env.NODE_ENV === 'production'
    ? '/etc/allaypanel'
    : path.join(process.cwd(), '.docker');

export const docker = new Dockerode();
