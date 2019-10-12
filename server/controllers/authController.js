const bcrypt = require("bcryptjs");

module.exports = {
  async register(req, res) {
    const { username, password, email } = req.body;
    console.log(req.body);
    
    const db = req.app.get("db");

    const user = db.auth.find_email(email);
    if (user[0])
      return res.status(200).send({ message: "lol this email is being used" });

    salt = bcrypt.genSaltSync(10);
    hash = bcrypt.hashSync(password, salt);

    const userId = await db.auth.add_user({ username, email });
    console.log(userId[0].id);
    
    db.auth.add_hash({ user_id: userId[0].id, hash }).catch(err => {
      return res.sendStatus(503);
    });
    req.session.user = {
      username,
      email,
      userId: userId[0].id,
      isAdmin: false
    };
    res.status(201).send({ message: "Logged in :)", user: req.session.user });
  },

  async login(req, res) {
    const db = req.app.get('db')
    const {username, password} = req.body
    console.log(username, password);
    
    const user = await db.auth.find_user(username)
    if(!user[0]) return res.status(200).send({message: 'User not found'})

    const result = bcrypt.compareSync(password, user[0].hash)
    if(!result) return res.status(200).send({message: 'Incorrect Password'})
    const {is_admin: isAdmin, id: id, email } = user[0]
    req.session.user = { username, email, id, isAdmin }
    res.status(200).send({message: 'yeet', user: req.session.user})
  },

  logout(req,res) {
    req.session.destroy()
    res.status(200).send('yeet')
  }
  
};
