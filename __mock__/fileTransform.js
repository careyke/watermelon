/**
 * 单元测试是不会去关心图片，字体等文件的，
 * 但是引用到文件中的时候jest会去解析，没有mock会报错。
 * 手动创建一个fileMock文件
 */
const path = require("path");
module.exports = {
  process(src, filename) {
    return `module.export = ${JSON.stringify(path.basename(filename))}`;
  }
};
