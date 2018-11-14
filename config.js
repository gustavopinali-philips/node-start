module.exports = {
    secret: 'nXcd#0lI',
    mysqlConfig: {
        connectionLimit: 25,
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'DB',
    },
    transporter: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'teste@gmail.com',
            pass: 'teste'
        },
        tls: {
            rejectUnauthorized: false
        }
    }
}