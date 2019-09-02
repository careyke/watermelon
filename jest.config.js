const path = require("path");
const ROOT = path.resolve(__dirname, "./");

module.exports = {
  rootDir: ROOT,
  collectCoverage: true, //是否收集测试覆盖率信息
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"], // 哪些文件需要收集测试覆盖率
  coverageDirectory: "<rootDir>/coverage", //测试覆盖率文件的输出目录
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/app.tsx",
    "^.+\\.d.ts$",
    "index.ts"
  ], //统计覆盖信息时需要忽略的文件
  setupFiles: ["<rootDir>/test/setup.js"], // 运行测试之前的预加载的脚本，常用来注册enzyme的兼容
  testRegex: ".*\\.test\\.js$", // 测试文件的正则表达式
  moduleFileExtensions: ["ts", "tsx", "js"], //支持加载的文件名,
  testPathIgnorePatterns: ["/node_moduels/"], //不用测试的文件,
  moduleNameMapper: {
    // 代表需要被Mock的资源名称
    "^.+\\.(css|less|scss)$": "identity-obj-proxy", //identity-obj-proxy没有transform的结构，即没有process,所以不能放在transform中，会报错
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mock__/fileTransform.js"
  },
  transform: {
    //测试文件的预处理
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
