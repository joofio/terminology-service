const csv = require('csvtojson');
const csvFilePath = './controllers/db/vih.csv';

function getAll(req,res) {

  csv().fromFile(csvFilePath).then((list)=>{
    return res.status(200).send(list);
  });
}

module.exports = {
  getAll
}