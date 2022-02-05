
const exercisemodal = require('../DB/exercise')

exports.finduser=(req,res) =>{
    exercisemodal.find().then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.adddata=(req,res) =>{
        const username = req.body.username;
        const Activity = req.body.Activity;
        const duration = Number(req.body.duration);
        const date = req.body.date;
      
        const newExercise = new exercisemodal({
            username,
          Activity,
          duration,
          date,
        });


newExercise.save()
  .then(() => res.json('Exercise succesfully added!'))
  .catch(err => res.status(400).json('Error: ' + err));
};
    
exports.finddata=(req,res) =>{
    exercisemodal.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
};
 
exports.finddataanddelete=(req,res)=>{
    exercisemodal.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.updatedata=(req, res) => {

    exercisemodal.findById(req.params.id)
      .then(exercise => {
        exercise.username = req.body.username;

        exercise.Activity = req.body.Activity;

        exercise.duration = Number(req.body.duration);

        exercise.date = req.body.date;
  
        exercise.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  };
  
