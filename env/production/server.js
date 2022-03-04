module.exports = ({ env }) => ({
    url: env("postgres://pvxdgtpgktwrvr:559b69fdb9ae584d36f0273e89ba9c024ddcc3dd64f3338616c340f5d47d0c73@ec2-54-220-243-77.eu-west-1.compute.amazonaws.com:5432/d168bgr4n1d816"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["sgsgnjhgsdf", "fjghdgdsg"]),
    },
  });
  