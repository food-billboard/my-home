import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "Home" },
  ],
  npmClient: 'yarn',
  links: [{ href: 'https://yarnpkg.com/en/package/normalize.css' }],
  // mpa: {},
  // base: './',
  // publicPath: './'
});
