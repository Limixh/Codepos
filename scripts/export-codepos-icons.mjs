#!/usr/bin/env node

import * as NodeFSP from "node:fs/promises";
import * as NodePath from "node:path";
import * as NodeURL from "node:url";
import sharp from "sharp";

import { encodePngIco } from "./lib/icon-export.ts";

const root = NodePath.resolve(NodePath.dirname(NodeURL.fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const source = (name) => NodePath.resolve(root, "assets/codepos", name);

async function png(svg, size) {
  return sharp(svg).resize(size, size).png().toBuffer();
}

async function output(path, contents) {
  const target = NodePath.resolve(root, path);
  if (check) {
    const current = await NodeFSP.readFile(target).catch(() => null);
    if (!current?.equals(contents)) throw new Error(`${path} is out of date`);
    return;
  }
  await NodeFSP.mkdir(NodePath.dirname(target), { recursive: true });
  await NodeFSP.writeFile(target, contents);
}

const square = await NodeFSP.readFile(source("mark.svg"));
const foreground = await NodeFSP.readFile(source("mark-foreground.svg"));
const monochrome = await NodeFSP.readFile(source("mark-monochrome.svg"));
const iconSizes = [16, 24, 32, 48, 64, 128, 180, 256, 1024];
const icons = new Map(
  await Promise.all(iconSizes.map(async (size) => [size, await png(square, size)])),
);
const ico = encodePngIco(
  [16, 24, 32, 48, 64, 128, 256].map((size) => ({
    size,
    contents: icons.get(size),
  })),
);

await Promise.all([
  output("assets/codepos/icon-1024.png", icons.get(1024)),
  output("assets/codepos/apple-touch-icon-180.png", icons.get(180)),
  output("assets/codepos/favicon-16x16.png", icons.get(16)),
  output("assets/codepos/favicon-32x32.png", icons.get(32)),
  output("assets/codepos/icon.ico", ico),
  output("assets/codepos/android-foreground.png", await png(foreground, 1024)),
  output("assets/codepos/android-notification.png", await png(monochrome, 256)),
  output("apps/web/public/apple-touch-icon.png", icons.get(180)),
  output("apps/web/public/favicon-16x16.png", icons.get(16)),
  output("apps/web/public/favicon-32x32.png", icons.get(32)),
  output("apps/web/public/favicon.ico", ico),
]);

process.stdout.write(check ? "Codepos icons are current.\n" : "Codepos icons exported.\n");
