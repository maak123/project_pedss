const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');

var userController = require('./controllers/userController.js');
var eventController = require('./controllers/eventController.js');
var subEventController = require('./controllers/subEventController.js');
var teamCardController = require('./controllers/teamCardController.js');
var amalClubMemberController = require('./controllers/amalClubMemberController.js');
var facSportCaptainController = require('./controllers/facSportCaptainController.js');


var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));



app.use('/user', userController);
app.use('/event',eventController);
app.use('/subEvent',subEventController);
app.use('/teamCard',teamCardController);
app.use('/amalClubMember',amalClubMemberController);
app.use('/facSportCaptain',facSportCaptainController);