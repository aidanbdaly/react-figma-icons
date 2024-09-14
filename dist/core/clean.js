"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExports = exports.updateComponents = void 0;
const promises_1 = require("node:fs/promises");
const updateComponents = async (components) => {
  const iconDirectory = "./custom";
  const isSystemFile = (path) =>
    path === `${iconDirectory}/index.ts` || path === `${iconDirectory}/_.tsx`;
  const existingComponents = await (0, promises_1.readdir)(iconDirectory).then(
    (files) => files.map((file) => `${iconDirectory}/${file}`),
  );
  const componentsToWrite = components.filter(
    (component) =>
      !existingComponents.some(
        (existingComponent) => component.path === existingComponent,
      ),
  );
  const componentsToDelete = existingComponents.filter(
    (existingComponent) =>
      !isSystemFile(existingComponent) &&
      !components.some((component) => component.path === existingComponent),
  );
  await Promise.all(
    componentsToDelete.map(
      async (component) => await (0, promises_1.unlink)(component),
    ),
  );
  await Promise.all(
    componentsToWrite.map(async (component) =>
      (0, promises_1.writeFile)(component.path, component.data),
    ),
  );
};
exports.updateComponents = updateComponents;
const updateExports = async (exports) => {
  const indexDirectory = "./custom/index.ts";
  const indexFile = await (0, promises_1.readFile)(indexDirectory);
  let existingExports = indexFile.toString().split("\n");
  const exportsToAdd = exports.filter(
    (newExport) =>
      !existingExports.some((existingExport) => existingExport === newExport),
  );
  const exportsToDelete = existingExports.filter(
    (existingExport) =>
      !exports.some((newExport) => newExport === existingExport) &&
      existingExport !== 'export * from "./_";',
  );
  existingExports = existingExports.filter(
    (existingExport) => !exportsToDelete.includes(existingExport),
  );
  existingExports.push(...exportsToAdd);
  await (0, promises_1.writeFile)(indexDirectory, existingExports.join("\n"));
};
exports.updateExports = updateExports;
//# sourceMappingURL=clean.js.map
