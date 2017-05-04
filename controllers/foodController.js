var Food = require('../models/food')

var methods = {}

methods.insert = (req, res)=>{
  var insertFood = new Food(req.body)
  insertFood.save(function(err,query){
    if(err){
      res.send(err)
    }else{
      res.send(query)
    }
  })
}

methods.getAll = function(req, res){
  Food.find(function(err,query){
    if(!err){
      res.send(query)
    }else{
      res.send(err)
    }
  })
}

methods.findById = function(req, res){
  Food.findOne({_id : req.params.id})
  .then(function(err,query){
    if(!err){
      res.send(query)
    }else{
      res.send(err)
    }
  })
}

methods.update = function(req, res){
  Food.findOneAndUpdate(req.params.id, {$set : req.body}, {new : true}, function(err, query){
    if(!err){
      res.send(query)
    }else{
      res.send(err)
    }
  })
}

methods.delete = function(req, res){
  Food.remove({_id : req.params.id})
  .then(function(err,query){
    if(!err){
      res.send("Data Deleted")
    }else{
      res.send(err)
    }
  })
}

module.exports = methods
