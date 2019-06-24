module.exports = {
  port: 9008,
  root: "dist",
  webpack: {
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./src/main"
      }
    },
    global: {},
    devServer: {
      proxy: {
        "/api": {
          "target": "http://localhost:8000",
          changeOrigin: true
        }
      }
    },
    externals: {},
    globalVars: './src/css/var.less'
  },
  copy: []
};
