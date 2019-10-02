const getHelmets = async (req, res) =>{
    const db = req.app.get('db')
    const helmets = await db.get_helmets()
    res.status(200).send(helmets)
}




module.exports = {
    getHelmets
}