const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require('multer');

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("The server started on port 3000 !!!!!!");
});

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `Electronic4u_${file.originalname}`)
    }
  })
  
const upload = multer({ storage: storage })
   
// let upload = multer({ dest: 'uploads/' })


  app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log(file.filename);
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file);
  })

  exports.api2 = app.route("/file")