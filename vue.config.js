module.exports = {
  devServer: {
    host: "localhost",
    proxy: {
      "/api": {
        target: "http://localhost:8080",
      },
    },
  },
};
