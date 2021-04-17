var contact = require("./db_connect")
const Contact = contact.Contact;
const express = require('express');

var app = express();
// const router = express.Router();
app.use(function (req, res, next) {
    /*var err = new Error('Not Found');
     err.status = 404;
     next(err);*/
  
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    // Pass to next layer of middleware
    next();
  });

app.use(express.json())

exports.api = app.route("/contact")
.get(async (req, res)=>{
    let data = await Contact.find();
    res.send(data);
    
})

.post(async (req, res)=>{
    let c1 = new Contact(req.body);
    let result = await c1.save();
    res.json(result);
})


app.listen(8082,()=>{
    console.log("listening at 8082");
})

// router.route("/:id")
// .get(async (req, res)=>{
//     //console.log(req.params)
//     let data = await User.find({_id:req.params.id});
//      res.json(data);
// })

// router.route("/")
// .get(async (req, res)=>{
//     let data = await User.find();
//     res.json(data);
// })

// .post(async (req, res)=>{
//     let u1 = new User(req.body);
//     let result = await u1.save();
//     res.json(result);
// })



// .delete(async (req, res)=>{
//     let d_rec = await User.deleteOne({_id:req.query.id})
//     res.json(d_rec);
// })

// module.exports = router
