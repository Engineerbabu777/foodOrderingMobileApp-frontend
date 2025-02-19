module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins:[
    'react-native-reanimated-plugin',
    [
      'module-resolver',{
        root:['./src'],
        alias:{
          '@assets':'./src/assets',
          '@components':'./src/components',
          '@styles':'./src/styles',
          '@features':'./src/features',
          '@navigation':'./src/navigation',
          '@service':'./src/service',
          '@utils':'./src/utils',
      },
    },
    ],
  ],
};
