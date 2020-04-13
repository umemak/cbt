const functions = require("firebase-functions");
const path = require("path");
const next = require("next");

module.exports = {
  next: async (req, res) => {
    var dev = process.env.NODE_ENV !== "production";
    var app = next({
      dev,
      conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` }
    });
    var handle = app.getRequestHandler();

    console.log("File: " + req.originalUrl); // log the page.js file that is being requested
    return app.prepare().then(() => handle(req, res));
  }
};
