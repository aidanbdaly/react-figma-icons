"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const createComponents_1 = require("./createComponents");
const getIconData_1 = require("./getIconData");
const update_1 = require("./update");
const figma_js_1 = require("figma-js");
if (require.main === module) {
    const command = process.argv[2];
    switch (command) {
        case "icons:generate": {
            (async () => {
                try {
                    const apiToken = process.env.FIGMA_API_TOKEN;
                    const fileId = process.env.FIGMA_FILE_ID;
                    if (!apiToken) {
                        throw new Error("'FIGMA_API_TOKEN' is missing");
                    }
                    if (!fileId) {
                        throw new Error("'FIGMA_FILE_ID' is missing");
                    }
                    const client = (0, figma_js_1.Client)({
                        personalAccessToken: apiToken,
                    });
                    console.log("Fetching data...");
                    const rawIconData = await (0, getIconData_1.GetIconData)({ fileId, client });
                    console.log("Data fetched successfully. Creating components...");
                    await (0, createComponents_1.CreateComponents)(rawIconData);
                    console.log("Icons generated successfully");
                }
                catch (error) {
                    console.error("Error generating icons:", error);
                }
            })();
            break;
        }
        case "icons:clean": {
            (async () => {
                try {
                    console.log("Cleaning...");
                    await (0, update_1.updateComponents)([]);
                    await (0, update_1.updateExports)([]);
                    console.log("Cleaned successfully");
                }
                catch (error) {
                    console.log("Error Cleaning:", error);
                }
            })();
            break;
        }
    }
}
__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map