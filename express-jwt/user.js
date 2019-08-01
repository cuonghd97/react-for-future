const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
  fullName: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  image: String
}, { timestamps: true })

// userSchema.pre('save', (next) => {
//   const user = this
//   if (!user.isModified('password')) {
//     return next()
//   }
//   bcrypt.hash(user.password, 10).then((hashedPassword) => {
//     user.password = hashedPassword;
//     next()
//   })
// }, (err) => {
//   next(err)
// })

// userSchema.methods.comparePassword = (candidatePassword, next) => {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     if (err) {
//       return next(err)
//     }
//     next(null, isMatch)
//   })
// }

module.exports = mongoose.model('User', userSchema)