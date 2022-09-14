require('dotenv').config()
module.exports= {
user:process.env.DB_USER,
password:process.env.DB_PASS,
database:process.env.DB_NAME,
server: 'localhost',
port: 1433,
pool: {
max: 10,
min: 0,
idleTimeoutMillis: 30000
},
options: {
encrypt: true, 
trustServerCertificate: true 
  }
}
