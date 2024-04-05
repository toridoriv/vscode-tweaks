#!/usr/bin/env node
import { spawn } from "node:child_process";
import fs from "node:fs";

const rawPackageJson = fs.readFileSync("package.json", "utf-8");
const packageJson = JSON.parse(rawPackageJson);

const vsce = spawn(
  "vsce",
  ["package", "--out", `${packageJson.name}.${packageJson.version}.vsix`],
  { stdio: "inherit" },
);

vsce.on("message", (data) => {
  console.log(data.toString());
});

vsce.on("close", (code) => {
  fs.writeFileSync(
    "package.json",
    rawPackageJson.replace('"type": "commonjs"', '"type": "module"'),
    "utf-8",
  );

  process.exit(code || 0);
});
