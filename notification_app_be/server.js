const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// {
//   "email": "satyam2.230101113@iiitbh.ac.in",
//   "name": "Satyam Singh",
//   "mobileNo": "9508746968",
//   "githubUsername": "1ssatyamsingh",
//   "rollNo": "230101113",
//   "accessCode": "NbQTbT"
// }

// http://4.224.186.213/evaluation-service/registration

// {
//     "email": "satyam2.230101113@iiitbh.ac.in",
//     "name": "satyam singh",
//     "rollNo": "230101113",
//     "accessCode": "NbQTbT",
//     "clientID": "f11f553d-c36e-4048-96f5-6abad1576cb4",
//     "clientSecret": "vUbkWndqmSTYuRwa"
// }