
const { User } = require("../models/User");

let auth = (req, res, next) => {

    //인증처리를 하는곳

    //쿠키에서 토큰을 가져오기
    let token = req.cookies.x_auth;

    //토큰에서 유저id 찾기
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true })

        req.token = token;
        req.user - user;
        next();
    })
    //인증성공

    //인증실패
}

module.exports = { auth };

