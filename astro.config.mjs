// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import nekoweb from '@indiefellas/astro-adapter-nekoweb';
import { env } from 'node:process';

import svelte from '@astrojs/svelte';

let nkw = [];

if (process.env.GITHUB_ACTIONS === 'true') {
  nkw.push(nekoweb({
    apiKey: env.NEKOWEB_APIKEY,
    cookie: env.NEKOWEB_COOKIE,
    folder: 'jbsite4_test/jbsite5'
  }));
}

// https://astro.build/config
export default defineConfig({
    site: 'https://jbcarreon123.nekoweb.org',
    base: '/jbsite5',

    integrations: [...nkw, svelte()],

    build: {
        concurrency: 12
      },
    
    image: {
      service: passthroughImageService()
    },

    trailingSlash: 'always',
});