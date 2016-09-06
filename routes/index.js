var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, function (error){
  if (error) {
    console.log(error);
  }
});
var Schema = mongoose.Schema;
var JsonSchema = new Schema({
  name:String,
  type: Schema.Types.Mixed
});
var Json = mongoose.model('JString',JsonSchema, 'layercollection');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET json data. */
router.get('/mapjson/:name', function (req, res) {
    if (req.params.name) {
        Json.findOne({ name: req.params.name },{}, function (err, docs) {
            res.json(docs);
        });
    }
});
/* GET layers json data. */
router.get('/maplayers', function (req, res) {
    Json.find({},{'type': 1}, function (err, docs) {
        res.json(docs);
    });
});

/* GET Map page. */
router.get('/map', function(req,res) {
    Json.find({},{}, function(e,docs){
        res.render('map', {
            "jmap" : docs,
            lat : 41.8781,
            lng : -87.6298
        });
    });
});
module.exports = router;
