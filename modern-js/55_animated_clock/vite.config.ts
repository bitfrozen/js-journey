import {defineConfig} from 'vite';

export default defineConfig({
  appType: 'mpa', // disable history fallback
  build: {
    target: ['es2015'],
  }
});
