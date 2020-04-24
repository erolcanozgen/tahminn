const providers = ['google', 'twitter']

const callbacks = providers.map(provider => {
    return process.env.NODE_ENV === 'production'
        ? `http://tahminn.herokuapp.com/${provider}/callback`
        : `http://localhost:8080/${provider}/callback`
})

const [googleURL, twitterURL] = callbacks

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
    ? 'http://tahminn.herokuapp.com/'
    : ['http://127.0.0.1:3000', 'http://localhost:3000']

exports.GOOGLE_CONFIG = {
    clientID: process.env.GOOGLE_KEY,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: googleURL
}

exports.TWITTER_CONFIG = {
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: twitterURL,
}