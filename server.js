const cors = require("cors");
const express = require("express");
const app = express();
const nodemailer=require('nodemailer');
const fs = require('fs');
const formidable=require('formidable');

app.use("/post",express.urlencoded({extended:true}));

app.use(express.static('resources'));


app.set("view engine", "ejs");

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);


app.post("/post", function(req, res){

  

var form = new formidable.IncomingForm({uploadDir:'fisiere', keepExtensions:true});
form.parse(req,function(err,fields,files){
  var telefon=fields.field3;
  var mesaj_extra=fields.field5;
  var nume=fields.field1;
  var prenume=fields.field2;
  var programare=fields.field6;
  var data=fields.field7;
  let email=fields.field4;
  var formular=files.field8.path;
  
  let v=["10:00","10:15","10:45","11:20","11:55","12:25","12:50"];
  var i = Math.floor((Math.random() * 7));
  let mesaj='Buna ziua, '+ prenume+' ' + nume+'!'+'\n\n'+'Tocmai ati ales serviciile clinicii noastre dentare, Performance Dental Clinic, optand pentru partea de '+programare+'. Programarea a fost inregistrata pentru data: '+data+', ora:'+v[i]+'.'+'\n\n'+'Cu drag,'+'\n'+'Echipa Performance Dental Clinic';
  var inputText=email;
  
  var transporter = nodemailer.createTransport({         //face autentificarea
  service: 'gmail',
  auth: {
    user: 'performance.dental.clinic@gmail.com',
    pass: 'PerformanceD01'
  },
 tls:{rejectUnauthorized:false}

});

var mailOptions = {                                       //optiunile mesajului
  from: 'performance.dental.clinic@gmail.com',
  to: email,
  subject: 'Programare Performance Dental Clinic',
  text: mesaj
};

console.log(mailOptions);

transporter.sendMail(mailOptions, function(error, info){              //trimite mail
  if (error) {
    console.log(error);
  } else {
    console.log('Mail trimis: ' + info.response);
  }
});
  
  res.sendFile(__dirname + "/resources/succes.html");
  var obj={'nume':nume, 'prenume':prenume, 'telefon':telefon,'email':email,'programare':programare,'data':data,'mesaj_extra':mesaj_extra,'formular':formular};
  console.log(obj);
  fs.readFile("resources/persoane.json",function(err,data){
  if(err) throw err;
  var date=JSON.parse(data);
  date.push(obj);
  fs.writeFileSync("resources/persoane.json",JSON.stringify(date));
})

});

});

app.get("/",function(req,res){
	res.sendFile(__dirname + "/resources/paginaprincipala.html");
});


app.get("*",function(req,res){
	res.render("404",{title:"404"});
});

app.listen(8080, ()=>{
  console.log("Server-ul asculta pe portul 8080");
})