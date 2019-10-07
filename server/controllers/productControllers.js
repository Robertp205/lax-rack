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
    }
    
}