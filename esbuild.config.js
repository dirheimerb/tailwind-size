const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist',
  plugins: [cssModulesPlugin()],
  loader: {
    '.ts': 'ts',
    '.css': 'css'
  }
});
