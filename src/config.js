const port = process.env.PORT
const dbUrl = process.env.MONGO_DB_URL
const jwtSecret = process.env.JWT_SECRET

module.exports = {
    port,
    dbUrl,
    jwtSecret
}