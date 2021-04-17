const mongoose = require("mongoose");

const conn_str = "mongodb://localhost:27017/ESD"
mongoose.connect(conn_str,  { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("connected sucessfully"))
.catch((err) => console.log(err));

//schema
const contactSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    city: String,
    email: String,
    suggest: String
});

const articleSchema = new mongoose.Schema({
    title: String,
    email: String
});

//create collection
const Contact = new mongoose.model("Contact", contactSchema);
const Article = new mongoose.model("Article", articleSchema);

exports.Contact = Contact;
exports.Article = Article;
