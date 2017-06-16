module.exports = function(col) {
  return function(req, res, next) {
    
      
      id = +req.params.val - 1;
      col.find({}, {"_id":0}).sort({id:1}).toArray(function(err, ress){
                            
               if(req.user){                                
                  res.render('vote', {ret:ress[id], user:req.user});
               }
                else{
                   res.render('vote', {ret:ress[id], user:"none"});
                }
            });
  }
  next();
}