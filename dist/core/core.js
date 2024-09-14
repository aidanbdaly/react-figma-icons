"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIconName = exports.ICON_KEYS = exports.iconFactory = void 0;
const custom = __importStar(require("../custom"));
const fontAwesome = __importStar(require("../FontAwesome"));
const config_1 = require("./config");
const ICONS = {
  ...fontAwesome,
  ...custom,
};
const isIconCoreName = (iconName) => iconName in ICONS;
const isIconName = (iconName) =>
  iconName in ICONS ||
  config_1.AMENITY_TO_ICON.some(({ amenityId }) => amenityId === iconName);
exports.isIconName = isIconName;
const iconFactory = new Map();
exports.iconFactory = iconFactory;
const ICON_KEYS = Object.keys(ICONS).filter(isIconCoreName);
exports.ICON_KEYS = ICON_KEYS;
Object.entries(ICONS).forEach(
  ([iconName, icon]) => isIconName(iconName) && iconFactory.set(iconName, icon),
);
config_1.AMENITY_TO_ICON.forEach(({ amenityId, icon }) =>
  iconFactory.set(amenityId, icon),
);
//# sourceMappingURL=core.js.map
