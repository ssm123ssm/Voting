module.exports = function(col) {
  return function(req, res, next) {
    col.find().toArray(function(err, ress){
            var idt = ress.length + 1;
            var ar = [];
        for(var i = 0; i < req.body.option.length; i++){
            ar.push({"item":req.body.option[i], "vt":0});
        }
         
            var ret = {"info":
                      [{"id":idt},
                      {"name":req.body.name},
                      {"num_options": req.body.option.length},
                      {"votes":ar}]};
            
            col.insert(ret);
            res.writeHead(302, {'Location': '/'});
            res.end();
        });
  }
  next();
}