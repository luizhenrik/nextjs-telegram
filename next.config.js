const path = require('path')
const withImages = require('next-images')
module.exports = withImages({
        esModule: true
})

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['localhost:3000', 'xirrim.com']
    }
}
