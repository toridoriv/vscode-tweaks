#!/usr/bin/env node
import fs from "node:fs";

const packageJson = fs.readFileSync("package.json", "utf-8");
const buildPackageJson = packageJson.replace('"type": "module"', '"type": "commonjs"');

fs.writeFileSync("package.json", buildPackageJson, "utf-8");
