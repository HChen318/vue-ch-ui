const glob = require("glob"); // 动态读文件夹来遍历
const path = require("path");

const { VueLoaderPlugin } = require("vue-loader");

const list = {};

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  //   console.log(files, "=files");
  for (const file of files) {
    const output = file.split(/[/.]/)[2];
    list[output] = `./${file}`;
  }
  //   console.log(list, "==list");
}

makeList("components/lib", list);

module.exports = {
  mode: "development",
  entry: list,
  output: {
    filename: "[name].umd.js",
    path: path.resolve(__dirname, "dist"),
    library: "myLib",
    libraryTarget: "umd",
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
    ],
  },
};
