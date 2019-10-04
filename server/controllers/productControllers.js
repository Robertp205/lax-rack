module.exports = {
    async getHelmets (req, res) {
        const db = req.app.get('db')
        const helmets = await db.getProducts.get_helmets()
        res.status(200).send(helmets)
    }
    
}