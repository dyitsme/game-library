const multer = require('multer')

const avatarStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/images/avatars')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname)
  }
})

const avatarUpload = multer({ storage: avatarStorage })

module.exports = {
  avatarUpload
}