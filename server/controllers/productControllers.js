module.exports = {
    async getHelmets (req, res) {
        const db = req.app.get('db')
        const helmets = await db.getProducts.get_helmets()
        res.status(200).send(helmets)
    },
    async getShoulders (req, res) {
        const db = req.app.get('db')
        const shoulders = await db.getProducts.get_shoulders()
        res.status(200).send(shoulders)
    },
    async getGloves (req, res) {
        const db = req.app.get('db')
        const gloves = await db.getProducts.get_gloves()
        res.status(200).send(gloves)
    },
    async getShafts (req, res) {
        const db = req.app.get('db')
        const shafts = await db.getProducts.get_shafts()
        res.status(200).send(shafts)
    },
    async getElbows (req, res) {
        const db = req.app.get('db')
        const elbows = await db.getProducts.get_elbows()
        res.status(200).send(elbows)
    },
    async getHeads (req, res) {
        const db = req.app.get('db')
        const heads = await db.getProducts.get_heads()
        res.status(200).send(heads)
    },
    async deleteHeads  (req, res)  {
        const {id} = req.params
        const db = req.app.get('db')
        const heads = await db.deleteProducts.delete_heads([id])
            res.status(200).send(heads)
        
    },
    deleteElbows  (req, res)  {
        const {id} = req.params
        const db = req.app.get('db')
        db.deleteProducts.delete_elbows([id]).then(()=>{
            res.status(200).send(`Listing has been removed`)
        })
    },
    deleteGloves  (req, res)  {
        const {id} = req.params
        const db = req.app.get('db')
        db.deleteProducts.delete_gloves([id]).then(()=>{
            res.status(200).send(`Listing has been removed`)
        })
    },
    deleteShoulder  (req, res)  {
        const {id} = req.params
        const db = req.app.get('db')
        db.deleteProducts.delete_shoulders([id]).then(()=>{
            res.status(200).send(`Listing has been removed`)
        })
    },
   
    deleteShafts  (req, res)  {
        const {id} = req.params
        const db = req.app.get('db')
        db.deleteProducts.delete_shafts([id]).then(()=>{
            res.status(200).send(`Listing has been removed`)
        })
    },
    async deleteHelmets  (req, res)  {
        const {id} = req.params
        const db = req.app.get('db')
        const helms = await db.deleteProducts.delete_helmets([id])
            res.status(200).send(helms)
        
    },
    //  deleteRacer  (req,res)  {
    //     const {id} = req.params;
    //     const db = req.app.get('db')
    //     db.delete_racer([id]).then(()=>{
    //         req.status(200).send(`Racer ${id} got wiped`)
    //     })
    // }
}