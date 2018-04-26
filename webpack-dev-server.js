const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const getConfig = require('./webpack.config');

const webpackDevHost = 'localhost';

export default {
  listen: (serverPort) => {
    const webpackDevPort = serverPort + 1;
    const config = getConfig(webpackDevPort);

    const webpackDevServer = new WebpackDevServer(
      webpack(config),
      {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true,
      },
    );

    webpackDevServer.listen(
      webpackDevPort,
      webpackDevHost,
      (err, result) => {
        if (err) {
          console.log(err);
        }

        console.log(`Listening at ${webpackDevHost}:${webpackDevPort}`);
      },
    );
  },
};
