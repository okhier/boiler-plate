const { User } = require('../models/User');

let auth = (req, res, next) => {
    //認証処理を行なう。 
    //クライアントクッキからトークンを持ってくる。

    let token = req.cookies.x_auth;
    // トークンを複合化してユーザを探す。
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })


        // console.log('userh', user)

        req.token = token;
        req.user = user;
        next();
    })
}


module.exports = { auth };