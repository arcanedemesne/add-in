import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

const env = 'prod';

process.env.NODE_ENV = env;

const msgStart = `Generating minified bundle for production via Webpack for production. This will take a moment...`;
console.log(msgStart.blue);

webpack(webpackConfig).run((err, stats) => {
    if (err) { // so a fatal error occurred. Stop here.
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    const msgEnd = `Your app has been compiled in production mode and written to ./build.`;
    console.log(msgEnd.green);

    return 0;
});