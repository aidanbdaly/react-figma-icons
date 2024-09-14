"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("./core");
const Icon = (props) => {
  const { name, className, style } = props;
  const Icon = core_1.iconFactory.get(name);
  if (!Icon) {
    return (0, jsx_runtime_1.jsx)("span", {});
  }
  return (0, react_1.cloneElement)(
    (0, jsx_runtime_1.jsx)(Icon, { className: className, style: style }),
  );
};
exports.Icon = Icon;
//# sourceMappingURL=icon.js.map
