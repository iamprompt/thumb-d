module.exports = {
  future: {
    webpack5: true,
  },
  poweredByHeader: false,
  generateEtags: false,
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve = {
  //       fallback: { fs: 'empty', module: 'empty' },
  //     }
  //   }

  //   return config
  // },
}
