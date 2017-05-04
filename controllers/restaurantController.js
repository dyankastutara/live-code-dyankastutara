var Restaurant = require('../models/restaurant')

var methods = {}

methods.insert = (req, res)=>{
  var insertRestaurant = new Restaurant(req.body)
  insertRestaurant.save(function(err,query){
    if(err){
      res.send(err)
    }else{
      res.send(query)
    }
  })
}

methods.getAll = function(req, res){
  Restaurant.find(function(err,query){
    if(!err){
      res.send(query)
    }else{
      res.send(err)
    }
  })
}

methods.findById = function(req, res){
  Restaurant.findOne({_id : req.params.id})
  .then(function(err,query){
    if(!err){
      res.send(query)
    }else{
      res.send(err)
    }
  })
}

methods.update = function(req, res){
  Restaurant.findOneAndUpdate(req.params.id, {$set : req.body}, {new : true}, function(err, query){
    if(!err){
      res.send(query)
    }else{
      res.send(err)
    }
  })
}

methods.delete = function(req, res){
  Restaurant.remove({_id : req.params.id})
  .then(function(err,query){
    if(!err){
      res.send("Data Deleted")
    }else{
      res.send(err)
    }
  })
}

module.exports = methods
