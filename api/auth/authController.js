const auth = require('./auth')

function post(req, res, next) {
  auth.post(req.body, (err, data) => {
    if (err) res.status(500).send(err)
    res.json(data)
  })
}

function get(req, res, next) {
  const token = req.headers['authorization']

  auth.get(token, (err, data) => {
    if (err) res.status(err.status).json(err)
    res.json(data)
  })
}

function forgotPassword(req, res) {
  auth.forgotPassword(req.body, (error, data) => {
    if (error) return res.status(error.status).json(error)
    return res.json(data)
  })
}

function resetPassword(req, res) {
  auth.resetPassword(req.params.token, req.body, (error, data) => {
    if (error) return res.status(error.status).json(error)
    return res.json(data)
  })
}

module.exports = {
  post,
  get,
  forgotPassword,
  resetPassword
}