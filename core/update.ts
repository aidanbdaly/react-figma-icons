import { readdir, unlink, readFile, writeFile } from "node:fs/promises";

const updateComponents = async (
  components: { path: string; data: string }[],
) => {
  const iconDirectory = "./custom";

  const isSystemFile = (path: string): boolean =>
    path === `${iconDirectory}/index.ts` || path === `${iconDirectory}/_.tsx`;

  const existingComponents = await readdir(iconDirectory).then((files) =>
    files.map((file) => `${iconDirectory}/${file}`),
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
    componentsToDelete.map(async (component) => await unlink(component)),
  );

  await Promise.all(
    componentsToWrite.map(async (component) =>
      writeFile(component.path, component.data),
    ),
  );

  console.log(
    `Components finished updating. Created: ${componentsToWrite.length}, Deleted: ${componentsToDelete.length}`,
  );
};

const updateExports = async (exports: string[]) => {
  const indexDirectory = "./custom/index.ts";

  const indexFile = await readFile(indexDirectory);

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

  await writeFile(indexDirectory, existingExports.join("\n"));
};

export { updateComponents, updateExports };
