import esbuild from "esbuild";

const banner = `/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/
`;

const context = await esbuild.context({
  banner: {
    js: banner,
  },
  entryPoints: ["source/extension.js"],
  bundle: true,
  external: ["vscode", "prettier"],
  format: "cjs",
  logLevel: "info",
  sourcemap: false,
  treeShaking: false,
  outfile: "dist/extension.js",
  minify: false,
  keepNames: true,
  platform: "node",
  mainFields: ["main"],
});

await context.rebuild();

process.exit(0);
