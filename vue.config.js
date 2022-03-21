module.exports = {
  devServer: {
    host: "localhost",
    port:8090,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
      },
      "/download":{
        target: "http://localhost:8080",
      }
    },
  },
};
