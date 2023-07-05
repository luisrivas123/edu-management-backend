module.exports = {
    api: {
        port: process.env.API_PORT || 3002
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'Anthar3s?',
    },
    mysql: {
        // host: process.env.MYSQL_HOST || 'localhost:3306',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || 'admin123',
        database: process.env.MYSQL_DB || 'mystore',
    },
}