const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",

  webpackConfig: {
    module: {
      rules: [{ test: /\.(png|svg|jpg|jpeg|gif)$/, type: "asset/resource" }],
    },
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
    module: {
      rules: [
        {
          test: /\. (png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
  },

  navigations: {
    "sirius-x.main": "/sirius-x",
    "sirius-x.schedule": "/sirius-x/schedule",
    "sirius-x.attendance": "/sirius-x/attendance",
    "sirius-x.attendance.new-meeting": "/sirius-x/attendance/new-meeting",
    "sirius-x.attendance.accession": "/sirius-x/attendance/accession",
    "sirius-x.attendance.meeting": "/sirius-x/attendance/meeting",
    "sirius-x.attendance.users": "/sirius-x/attendance/users",
    "sirius-x.attendance.auth.login": "/sirius-x/attendance/auth/login",
    "sirius-x.attendance.auth.registration":
      "/sirius-x/attendance/auth/registration",
    "sirius-x.statistics": "/sirius-x/statistics",
  },

  features: {
    "sirius-x": {
      // add your features here in the format [featureName]: { value: string }
    },
  },

  config: {
    "sirius-x.attendance": "http://localhost:3002",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
