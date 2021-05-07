module.exports = {
    outputDir: "../sampliernode/public/samplier",
    publicPath: process.env.NODE_ENV === 'production'
        ? '/samplier/'
        : '/',
    devServer: {
        host: 'www.samplier.be'
    }
}