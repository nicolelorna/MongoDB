const Note =require('../models/notes.model.js');

//define  routes
exports.create =(req,res)=>{
    //validation of requests
    if(!req.body.content){
         return res.status(400).send({
             message:"there is no content"
         });
     }
     //creating the note
    const note =new Note({
        title:req.body.title || "untitled note",
        content:req.body.content
    });
    //saving the notes
    note.save()
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "error occurred"
        });
    });
};


//return all notes
 /*   exports.find=(req,res)={

    };

    //find one note

    exports.findone=(req,res)={
        
    };

    //

    exports.update=(req,res)={

    };

    exports.delete=(req,res)={

    }; */