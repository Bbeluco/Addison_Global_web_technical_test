module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@customTypes': './src/types',
          '@constants': './src/constants',
          '@customUtils': './src/utils',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
