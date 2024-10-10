import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

const PUBLIC_PATH = 'https://{{CDN_HOST}}/{{CDN_PATH_PREFIX}}';

export default defineConfig({
  plugins: [pluginVue()],
  dev: {
    assetPrefix: '/',
  },
  output: {
    assetPrefix: PUBLIC_PATH,
  },
  tools: {
    htmlPlugin: {
      publicPath: process.env.NODE_ENV === 'production' ? PUBLIC_PATH : '/',
    }
  },
  performance: {
    prefetch: {
      type: 'async-chunks'
    }
  }
});
