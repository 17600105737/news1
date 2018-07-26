// 处理函数
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'news'
})
// 渲染页面
exports.showIndex = (req, res) => {
    res.render('signin.html');
}
// 登录邮箱验证
exports.handleSignin = (req, res) => {
    const body = req.body;
    const sqlstr = "SELECT * FROM `users` WHERE `email`= ?";
    connection.query(sqlstr, body.email, (err, results) => {
        if (err) {
            return res.send({
                code: 500,
                message: err.message
            })
        }

        if (!results[0]) {
            return res.send({
                code: 1,
                message: '邮箱名字都记不住？'
            })
        }

        if (results[0].password !== body.password) {
            return res.send({
                code: 2,
                message: '密码错误'
            })
        }

        res.send({
            code:200,
            message:'可以登录'
        })
    })
}