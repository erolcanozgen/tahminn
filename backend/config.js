const providers = ['google']

const callbacks = providers.map(provider => {
    return process.env.NODE_ENV === 'production'
        ? `http://tahminn.com/${provider}/callback`
        : `http://localhost:8080/${provider}/callback`
})

const [googleURL] = callbacks

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
    ? 'http://tahminn.com'
    : ['http://127.0.0.1:3000', 'http://localhost:3000']

exports.GOOGLE_CONFIG = {
    clientID: process.env.GOOGLE_KEY,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: googleURL
}
