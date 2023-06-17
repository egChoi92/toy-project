const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    setupMiddlewares: [
      (app) => {
        app.use(path.join(__dirname, "/middlewares/my-middleware.js"));
      },
    ],
  },
};