import { IconData } from "./types";
import { updateComponents, updateExports } from "./update";

type DownloadedIcon = {
  readonly data: string;
  readonly name: string;
};

const ComponentTemplate = (downloadedIcon: DownloadedIcon): string => {
  const path = downloadedIcon.data
    .split("\n")
    .filter((line: string) => line.includes("<path"))
    .map((path: string) => path.replace(/fill="[^"]*"/g, ""))
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

const CreateComponents = async (iconData: IconData[]): Promise<void> => {
  const downloadedIcons = await Promise.all(
    iconData.map(async (data): Promise<DownloadedIcon> => {
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
    data: ComponentTemplate(downloadedIcon),
  }));

  updateExports(exports);
  updateComponents(components);
};

export { CreateComponents };
