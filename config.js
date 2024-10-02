module.exports = {
  api: {
    port: process.env.API_PORT || 3002
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'Anthar3s?'
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    port: process.env.MYSQL_PORT || '3306',
    password: process.env.MYSQL_PASS || 'password',
    database: process.env.MYSQL_DB || 'mystore'
  },
  mysqlPool: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    port: process.env.MYSQL_PORT || '3306',
    password: process.env.MYSQL_PASS || 'password',
    database: process.env.MYSQL_DB || 'mystore',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  }
}
