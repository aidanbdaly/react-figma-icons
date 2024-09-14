import { CreateComponents } from "./createComponents";
import { GetIconData } from "./getIconData";
import { updateComponents, updateExports } from "./update";
import {
  Client as FigmaClient,
  ClientInterface as FigmaClientInterface,
} from "figma-js";

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

          const client: FigmaClientInterface = FigmaClient({
            personalAccessToken: apiToken,
          });

          console.log("Fetching data...");

          const rawIconData = await GetIconData({ fileId, client });

          console.log("Data fetched successfully. Creating components...");

          await CreateComponents(rawIconData);

          console.log("Icons generated successfully");
        } catch (error: any) {
          console.error("Error generating icons:", error);
        }
      })();

      break;
    }
    case "icons:clean": {
      (async () => {
        try {
          console.log("Cleaning...");
          await updateComponents([]);
          await updateExports([]);

          console.log("Cleaned successfully");
        } catch (error: any) {
          console.log("Error Cleaning:", error);
        }
      })();

      break;
    }
  }
}

export * from "./types";
