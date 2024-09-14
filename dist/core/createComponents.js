"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponents = void 0;
const update_1 = require("./update");
const ComponentTemplate = (downloadedIcon) => {
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
    const downloadedIcons = await Promise.all(iconData.map(async (data) => {
        const response = await fetch(data.url);
        return {
            data: await response.text(),
            name: data.name,
        };
    }));
    const exports = downloadedIcons.map((iconData) => `export { ${iconData.name}Icon } from "./${iconData.name}";`);
    const components = downloadedIcons.map((downloadedIcon) => ({
        path: `./custom/${downloadedIcon.name}.tsx`,
        data: ComponentTemplate(downloadedIcon),
    }));
    (0, update_1.updateExports)(exports);
    (0, update_1.updateComponents)(components);
};
exports.CreateComponents = CreateComponents;
//# sourceMappingURL=createComponents.js.map