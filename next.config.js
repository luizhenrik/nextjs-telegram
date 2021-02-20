const path = require('path')
const withImages = require('next-images')
// module.exports = withImages({
//         esModule: true
// })

module.exports = {
    images: {
        domains: ['localhost:3000', 'xirrim.com']
    },
    paths: {
      "@/*": ["./*"]
    }
}
