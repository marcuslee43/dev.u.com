let envConfig;

if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
  envConfig = require('./config.production').config;
} else {
  envConfig = require('./config.development').config;
}

export const config = {
  ...envConfig,
};
