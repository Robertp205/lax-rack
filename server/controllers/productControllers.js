module.exports = {
  async getHelmets(req, res) {
    const db = req.app.get("db");
    const helmets = await db.get.get_helmets();
    res.status(200).send(helmets);
  },
  async getShoulders(req, res) {
    const db = req.app.get("db");
    const shoulders = await db.get.get_shoulders();
    res.status(200).send(shoulders);
  },
  async getGloves(req, res) {
    const db = req.app.get("db");
    const gloves = await db.get.get_gloves();
    res.status(200).send(gloves);
  },
  async getShafts(req, res) {
    const db = req.app.get("db");
    const shafts = await db.get.get_shafts();
    res.status(200).send(shafts);
  },
  async getElbows(req, res) {
    const db = req.app.get("db");
    const elbows = await db.get.get_elbows();
    res.status(200).send(elbows);
  },
  async getHeads(req, res) {
    const db = req.app.get("db");
    const heads = await db.get.get_heads();
    res.status(200).send(heads);
  },
  async deleteHeads(req, res) {
    const { id } = req.params;
    const db = req.app.get("db");
    const heads = await db.delete.delete_heads([id]);
    res.status(200).send(heads);
  },
  deleteElbows(req, res) {
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete.delete_elbows([id]).then(() => {
      res.status(200).send(`Listing has been removed`);
    });
  },
  deleteGloves(req, res) {
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete.delete_gloves([id]).then(() => {
      res.status(200).send(`Listing has been removed`);
    });
  },
  deleteShoulder(req, res) {
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete.delete_shoulders([id]).then(() => {
      res.status(200).send(`Listing has been removed`);
    });
  },

  deleteShafts(req, res) {
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete.delete_shafts([id]).then(() => {
      res.status(200).send(`Listing has been removed`);
    });
  },
  deleteHelmets: (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete.delete_helmets([id]).then(result => {
      res.status(200).send(result);
    });
  },
  updateElbows: (req, res)=>{
      const {id} = req.params;
      const {price} = req.body
      const db = req.app.get('db')
      db.update.update_elbows([price, id]).then(result => {
          res.status(200).send(result)
      })
  },
  updateGloves: (req, res)=>{
    const {id} = req.params;
    const {price} = req.body
    const db = req.app.get('db')
    db.update.update_gloves([price, id]).then(result => {
        res.status(200).send(result)
    })
  },
  updateHeads: (req, res)=>{
    const {id} = req.params;
    const {price} = req.body
    const db = req.app.get('db')
    db.update.update_heads([price, id]).then(result => {
        res.status(200).send(result)
    })
  },
  updateHelmets: (req, res)=>{
    const {id} = req.params;
    const {price} = req.body
    const db = req.app.get('db')
    db.update.update_helmets([price, id]).then(result => {
        res.status(200).send(result)
    })
  },
  updateShafts: (req, res)=>{
    const {id} = req.params;
    const {price} = req.body
    const db = req.app.get('db')
    db.update.update_shafts([price, id]).then(result => {
        res.status(200).send(result)
    })
  },
  updateShoulders: (req, res)=>{
    const {id} = req.params;
    const {price} = req.body
    const db = req.app.get('db')
    db.update.update_shoulders([price, id]).then(result => {
        res.status(200).send(result)
    })
  }
};
