import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const hashearContra = async (req, res) => {
    console.log(req.body);
    const saltRounds = 10;
    const password = req.body.password;

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            res.send(hash)
        });
    });
};

const compareContra = async (req, res) => {
    const password = req.body.password;
    const hash = req.body.hash;
    bcrypt.compare(password, hash, function (err, result) {
        res.json(result);
    });
};

const createToken = async (req, res) => {

    const { payload } = req.body;
    const token = jwt.sign(payload, "secret", {expiresIn: "1h"});
    res.json({token});

};


const verifyToken = async (req, res) => {

    const { token } = req.body;
    try {
        const payload = jwt.verify(token, "secret");
        res.json({ payload });

    } catch (error){
        res.status(400).json({error: error.message});
    }
};

const hash = {
    hashearContra,
    compareContra,
    createToken,
    verifyToken
};

export default hash;

