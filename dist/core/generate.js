"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponents = exports.GetIconData = void 0;
require("dotenv/config");
const figma_js_1 = require("figma-js");
const clean_1 = require("./clean");
const componentTemplate = (downloadedIcon) => {
  const path = downloadedIcon.data
    .split("\n")
    .filter((line) => line.includes("<path"))
    .map((path) => path.replace(/fill="[^"]*"/g, ""))
    .join("\n");
  return `
    import type { IconCoreProps } from "../core/types";

    const ${downloadedIcon.name}Icon = (props: IconCoreProps): JSX.Element => {
      const { className, style } = props;

      return (
        <svg
          className={className}
          style={style}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          ${path}
        </svg>
      );
    };

    export { ${downloadedIcon.name}Icon };
  `;
};
const CreateComponents = async (iconData) => {
  const downloadedIcons = await Promise.all(
    iconData.map(async (data) => {
      const response = await fetch(data.url);
      return {
        data: await response.text(),
        name: data.name,
      };
    }),
  );
  const exports = downloadedIcons.map(
    (iconData) => `export { ${iconData.name}Icon } from "./${iconData.name}";`,
  );
  const components = downloadedIcons.map((downloadedIcon) => ({
    path: `./custom/${downloadedIcon.name}.tsx`,
    data: componentTemplate(downloadedIcon),
  }));
  (0, clean_1.updateExports)(exports);
  (0, clean_1.updateComponents)(components);
};
exports.CreateComponents = CreateComponents;
const GetComponentNodes = (root) => {
  const stack = [root];
  const components = [];
  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    if ("children" in node) stack.push(...node.children);
    if (node.type === "COMPONENT") components.push(node);
  }
  return components;
};
const GetIconData = async () => {
  const apiToken = process.env.FIGMA_API_TOKEN;
  const fileId = process.env.FIGMA_FILE_ID;
  if (!apiToken || !fileId) {
    throw new Error("'FIGMA_API_TOKEN' or 'FIGMA_FILE_ID' is missing");
  }
  const client = (0, figma_js_1.Client)({
    personalAccessToken: apiToken,
  });
  const file = await client.file(fileId);
  const components = Array.from(GetComponentNodes(file.data.document));
  const componentIds = components.map((component) => component.id);
  const fileImages = await client.fileImages(fileId, {
    format: "svg",
    ids: componentIds,
  });
  return components.map((component) => {
    var _a, _b;
    return {
      id: component.id,
      name:
        (_a = component.name.split("Icon=").pop()) !== null && _a !== void 0
          ? _a
          : "",
      url:
        (_b = fileImages.data.images[component.id]) !== null && _b !== void 0
          ? _b
          : "",
    };
  });
};
exports.GetIconData = GetIconData;
//# sourceMappingURL=generate.js.map
