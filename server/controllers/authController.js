const bcrypt = require("bcryptjs");

module.exports = {
  async register(req, res) {
    const { username, password, email } = req.body;
    const db = db.app.get("db");

    const user = db.auth.find_email(email);
    if (user[0])
      return res.status(200).send({ message: "lol this email is being used" });

    saltyBoi = bcrypt.genSaltSync(15);
    hashyBoi = bcrypt.hashSync(password, saltyBoi);

    const userId = await db.auth.add_user({ username, email });
    db.auth.add_hash({ user_id: userId[0].id, hash }).catch(err => {
      return res.sendStatus(503);
    });
    req.session.user = {
      email,
      username,
      userId: userId[0].id,
      isAdmin: false
    };
    res.status(201).send({ message: "Logged in :)", user: req.session.user });
  }
  
};
