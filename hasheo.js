import bcrypt from "bcryptjs";

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

const shalom = {
    hashearContra,
    compareContra
};

export default shalom;

