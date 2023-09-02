const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/<your-app-name>",
  {
    branch: "main",
    repo: "https://github.com/00185fm/tw-editor.git",
    user: {
      name: "fcastrovilli",
      email: "francesco.castrovilli95@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
