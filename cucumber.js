export default {
  default: {
    require: ["features/step-definitions/**/*.js"],
    format: ["progress"],
    paths: ["features/**/*.feature"],
    timeout: 30000,
  },
};
