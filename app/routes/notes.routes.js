module.exports = (app)=>{
    const notes = require ('../controllers/note.controller.js');
    //create notes
    app.post('/notes',notes.create);
    //pull notes
    app.get('/notes',notes.find);
    //get notes {id}
    app.get('/notes/:Id',notes.findone);
    //update notes{id}
    app.put('/notes/:Id',notes.update);
    //Delete notes{id}
    app.delete('/notes/:Id',notes.delete);

    
}
