const getUrl = () => {
  if (process.argv.join(" ").includes("strapi develop")) {
    return "admin";
  } else {
    return "admin";
  }
};

module.exports = ({ env }) => ({
  url: getUrl(),
  // serveAdminPanel: false,
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
