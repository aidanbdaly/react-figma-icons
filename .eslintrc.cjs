module.exports = {
  root: true,
  extends: ["custom"],
  ignorePatterns: [".eslintrc.cjs"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
