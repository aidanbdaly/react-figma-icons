"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIconData = void 0;
require("dotenv/config");
const GetComponentNodes = (root) => {
    const stack = [root];
    const components = [];
    while (stack.length) {
        const node = stack.pop();
        if (!node)
            continue;
        if ("children" in node)
            stack.push(...node.children);
        if (node.type === "COMPONENT")
            components.push(node);
    }
    return components;
};
const GetIconData = async ({ fileId, client, }) => {
    const project = await client.file(fileId);
    const components = GetComponentNodes(project.data.document);
    const fileImages = await client.fileImages(fileId, {
        format: "svg",
        ids: components.map((component) => component.id),
    });
    return components.map((component) => {
        var _a, _b;
        return ({
            id: component.id,
            name: (_a = component.name.split("Icon=").pop()) !== null && _a !== void 0 ? _a : "",
            url: (_b = fileImages.data.images[component.id]) !== null && _b !== void 0 ? _b : "",
        });
    });
};
exports.GetIconData = GetIconData;
//# sourceMappingURL=getIconData.js.map