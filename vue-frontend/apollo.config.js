// apollo.config.js
module.exports = {
    client: {
      service: {
        name: 'vue-frontend',
        // URL to the GraphQL API
        url: 'https://marens-website.ddev.site/index.php?action=graphql/api',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }