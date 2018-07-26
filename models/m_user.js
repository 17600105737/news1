// 模型
const connection = require('../tools/db_config')
function checkEmail(email,callback) {
    const sqlstr = "SELECT * FROM `users` WHERE `email`= ?";
    connection.query(sqlstr, email, (err, results) => {
        if (err) {
            callback(err);
        }
        callback(null,results);
    })
}

exports.checkEmail = checkEmail;