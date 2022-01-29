const withPlugins = require('next-compose-plugins');
const withPWA = require("next-pwa")
const runtimeCaching = require('next-pwa/cache')
const SentryWebpackPlugin = require('@sentry/webpack-plugin');

const {
    NODE_ENV,
    SENTRY_DSN,
    SENTRY_ORG,
    SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN,
    SENTRY_ENVIRONMENT,
    COMMIT_SHA,
} = process.env;

const isProd = NODE_ENV === "production";

process.env.SENTRY_DSN = SENTRY_DSN;

let env = {};
if (!!SENTRY_ENVIRONMENT) {
    env = {
        commitSha: COMMIT_SHA,
        sentryEnvironment: SENTRY_ENVIRONMENT,
    }
}

module.exports = withPlugins(
    [
        withPWA({
            pwa: {
                disable: !isProd,
                dest: "public",
                runtimeCaching
            }
        }),
    ],
    {
        env,
        productionBrowserSourceMaps: true,
    }
)
