import "dotenv/config";

import type { ClientInterface as FigmaClientInterface, Node } from "figma-js";
import { IconData } from "./types";

const GetComponentNodes = (root: Node): Node[] => {
  const stack: Node[] = [root];
  const components: Node[] = [];

  while (stack.length) {
    const node = stack.pop();

    if (!node) continue;

    if ("children" in node) stack.push(...node.children);

    if (node.type === "COMPONENT") components.push(node);
  }

  return components;
};

const GetIconData = async ({
  fileId,
  client,
}: {
  fileId: string;
  client: FigmaClientInterface;
}): Promise<IconData[]> => {
  const project = await client.file(fileId);

  const components = GetComponentNodes(project.data.document);

  const fileImages = await client.fileImages(fileId, {
    format: "svg",
    ids: components.map((component) => component.id),
  });

  return components.map((component) => ({
    id: component.id,
    name: component.name.split("Icon=").pop() ?? "",
    url: fileImages.data.images[component.id] ?? "",
  }));
};

export { GetIconData };
