import { defineConfig } from "umi";
import { merge } from 'lodash'

const { REACT_APP_ENV } = process.env;

const baseConfig = {
  routes: [
    { path: "/", component: "Home" },
  ],
  hash: true,
  history: {
    type: 'hash'
  },
  npmClient: 'yarn',
  links: [{ href: 'https://yarnpkg.com/en/package/normalize.css' }],
}

const developmentConfig: any = merge({}, baseConfig, {
  define: {
    'process.env.REACT_APP_ENV': 'dev',
  },
});

const productionConfig: any = merge({}, baseConfig, {
  define: {
    'process.env.REACT_APP_ENV': 'prod',
  },
  base: '/',
  publicPath: '/api/backend/my-home/',
});

export default defineConfig(REACT_APP_ENV === 'prod' ? productionConfig : developmentConfig);
