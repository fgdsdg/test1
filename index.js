const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/spering-html'));

var UserData = {
    Id: '',
    Pw: '',
    Name: '',
    Gender: '',
    Num: '',
    Phone: ''
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/exam.html');
});

app.get('/join', (req, res) => {
    res.sendFile(__dirname + '/join.html');
});

app.post('/JoinSuccess', (req, res) => {
    user = Object.create(UserData);

    user.id = req.body.id
    user.pw = req.body.pw
    user.name = req.body.name
    user.gender = req.body.gender
    user.num = req.body.num
    user.phone = req.body.phone

    console.log(id + pw + name + gender + num + phone)

});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  }); 
