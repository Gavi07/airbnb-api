const {
    findAllExperiences,
    findTop5Experiences,
    findExperiences 
} = require('../bussinesLogic/experiencesBL');

const all = async (req, res) => {
    try {
        const response = await findAllExperiences(); // { experiences: [] }
        res.json(response);
    } catch (error) {
        res.status(500).send(error);
    }
}
    
const top5 = async (req, res) => {
    try {
        const response = await findTop5Experiences();
        res.json(response);
    } catch (error) {
        res.status(500).send(error);
    }
}
    
const detail = (req, res) => {
    const { id } = req.params;
    try {
        const response = findExperiences(id);
        res.json(response);
    } catch (error) {
        res.send(error).status(404);
    }
}
    
module.exports = {
    all,
    top5,
    detail
}