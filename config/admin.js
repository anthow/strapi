module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7f182b97e67cdc7ab46f237a53b54ec1'),
  },
});
