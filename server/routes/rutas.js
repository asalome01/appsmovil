var MongoClient = require('mongodb').MongoClient
//var assert = require('assert')
var express = require('express')
//var app = express()
var router = express.Router();

var db = null
MongoClient.connect('mongodb://prueba:12345@ds037824.mongolab.com:37824/afiliado', function(err,database) {
    //assert.equal(err,null)
    db = database
})

router.get('/', function(req,res) {
    db.collection('ideasnegocio').find({}).toArray(function(err,doc) {
      //  assert.equal(err,null)
        res.send(JSON.stringify(doc))
    })
})


// router.put('/actualiza/:id', function(req, res){
//      console.log('id actualizar : '+req.params.id);
//      console.log('valor tiempo : '+req.body.tiempo);

//        db.collection('ideasnegocio').findById(req.params.id, function(e,data){  
//         if(e){ res.send(e); }
//         data.ideas.inversion.Tiempo = req.body.tiempo;
        
//         data.save(function(err){
//             if(err){
//                 res.send(err);
//             res.json(data);
//             }
//         })
//     })
// })

router.put('/actualiza/:id', function(req,res) {

       //var idIdea = req.params.id;
      
    console.log('id actualizar : '+req.params.id);
    console.log('valor tiempo : '+req.body.tiempo);

    // db.collection('ideasnegocio').update(
    //   { _id : req.params.id },
    //   { $set : { "ideas.inversion.Tiempo":req.body.tiempo } },
    // function( err, result ) {
    //     if ( err ) throw err;
    //  }
    // )


    db.collection('ideasnegocio').updateOne(
      { _id : req.params.id },
      { $set: { "ideas.inversion.Tiempo":req.body.tiempo } },
      function(err, results) {
        if ( err ) throw err;
        console.log(results);
    });


});

module.exports = router;
