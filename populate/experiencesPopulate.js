require('./../connection/connectionDb');
const ExperienceModel = require('./../models/experiencesModel');
const EXPERIENCES_REPOSITORY = require('./../repository/experiencesRepository');

const experiencesPopulate = () => {
    try {
        EXPERIENCES_REPOSITORY.map( async el => {
            await ExperienceModel(el).save();
            console.log('Popule', el);
        })
    } catch (err) {
        console.error('Error:', err);
    }
}

experiencesPopulate();