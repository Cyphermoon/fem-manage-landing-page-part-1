module.exports = {
    plugins: [
        require('postcss-preset-env')({ stage: 1 }),
        require('flex-gap-polyfill'),
        require('autoprefixer')
    ],
}