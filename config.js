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
  }
}
