"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearIndex = exports.clearComponents = void 0;
const promises_1 = require("node:fs/promises");
const clearComponents = async () => {
  const iconDirectory = "./custom";
  const filePaths = await (0, promises_1.readdir)(iconDirectory);
  const fullPaths = filePaths
    .filter((path) => path !== "index.ts" && path !== "_.tsx")
    .map((path) => `${iconDirectory}/${path}`);
  fullPaths.map((path) => (0, promises_1.unlink)(path));
};
exports.clearComponents = clearComponents;
const clearIndex = async () => {
  const indexDirectory = "./custom/index.ts";
  const indexFile = await (0, promises_1.readFile)(indexDirectory);
  const indexFileExports = indexFile.toString().split("\n");
  const filteredExports = indexFileExports.filter((line) =>
    line.includes("./_"),
  );
  await (0, promises_1.writeFile)(indexDirectory, filteredExports.join("\n"));
};
exports.clearIndex = clearIndex;
//# sourceMappingURL=initialize.js.map
