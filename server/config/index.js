import dotenv from 'dotenv'

dotenv.config()

export default {
    databaseUrl:
        process.env.DATABASE_URL || 'mongodb://localhost:27017/mevnmongo',
    url: process.env.APP_URL || 'http://localhost:3000',
    jwtSecret: process.env.JWT_SECRET || '1234',
    port: process.env.PORT || 3000,
    development: !process.env.NODE_ENV ? true : process.env.NODE_ENV === 'development',
    production: process.env.NODE_ENV === 'production',
    testing: process.env.NODE_ENV === 'testing'
}
