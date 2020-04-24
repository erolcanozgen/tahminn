const fs = require('fs-extra');

fs.copy('./client/build/', './backend/build/', err =>{
  if(err) return console.error(err);
  console.log('success!');
});