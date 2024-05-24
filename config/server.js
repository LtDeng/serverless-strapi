const getUrl = ({ env }) => {
  if (process.argv.join(" ").includes("strapi develop")) {
    console.log("DEV");
    return "";
  } else if (env.bool("IS_OFFLINE") || env.bool("BUILD_FOR_OFFLINE")) {
    console.log("OFFLINE");
    return "http://localhost:4000/dev";
  } else {
    console.log("PROD");
    return env("SERVER_URL", "dev");
  }
};

module.exports = ({ env }) => ({
  url: getUrl({ env }),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
