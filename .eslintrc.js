module.exports = {
    root: true,
    settings: {
        "import/resolver": {
            "babel-module": {
                root: ['./src'],
                alias: {
                    '@API': './src/API',
                    '@components': './src/components',
                    '@constants': './src/constants',
                    '@lib': './src/lib',
                    '@navigation': './src/navigation',
                    '@assets': './assets',
                    '@screens': './src/screens',
                    '@store': './src/store'
                },
            }
        }
    },
    extends: '@react-native-community',
};
