const { Activity } = require('../db');

const delActivity = async function(req, res){
    try{
        const {id} = req.body
        await Activity.destroy({
            where: {
                id: id,
            }
        })
        return res.send(200)
    }

    catch (error) {
        return res.status(500).send(error)
}
}
module.exports = { delActivity }