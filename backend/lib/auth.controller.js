exports.google = (req, res) => {
    const io = req.app.get('io')
    const user = {
        name: req.user.displayName,
    }
    io.in(req.session.socketId).emit('google', user)
    res.end()
}

exports.twitter = (req, res) => {
    const io = req.app.get('io')
    const user = {
        name: req.user.username,
    }
    io.in(req.session.socketId).emit('twitter', user)
    res.end()
}