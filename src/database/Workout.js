const Workout = require('../model/workoutModel');

const getAllWorkouts = async () => {
    try{
        const workouts = await Workout.find();
        return workouts;
    }
    catch(error)
    {
        throw error;
    }
};

module.exports = {
    getAllWorkouts
}