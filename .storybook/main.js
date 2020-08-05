module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@next/plugin-storybook/preset',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
  ],
};
