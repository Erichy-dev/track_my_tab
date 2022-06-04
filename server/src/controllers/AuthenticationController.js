/* eslint-disable @typescript-eslint/no-var-requires */
const {User} = require('../models')

module.exports = {
  async register (req, res){
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      //email already exists
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  }
}