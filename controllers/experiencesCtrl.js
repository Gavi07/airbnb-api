const {
    findAllExperiences,
    findTop5Experiences,
    findExperiences 
} = require('./../bussinesLogic/experiencesBL');

const all = (req, res) => {
    const response = findAllExperiences();
    res.json(response);
}
    
const top5 = (req, res) => {
    const response = findTop5Experiences;
    res.json(response);
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