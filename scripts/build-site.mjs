import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "dist");
const publicFiles = [
  "index.html",
  "404.html",
  "favicon.svg",
  "apple-touch-icon.png",
  "og-image.jpg",
  "robots.txt",
  "sitemap.xml",
  "css",
  "js",
  "fonts",
  "img/opt",
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of publicFiles) {
  const destination = resolve(output, entry);
  await mkdir(dirname(destination), { recursive: true });
  await cp(resolve(root, entry), destination, { recursive: true });
}
console.log("Sitio preparado en dist/ con los archivos públicos necesarios.");
