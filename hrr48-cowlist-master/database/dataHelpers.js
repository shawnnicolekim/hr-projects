const db = require('./index.js');

var save = function(cowInfo) {
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO cows(name, description) VALUES ('${cowInfo.name}', '${cowInfo.description}')`;
    db.query(sql, (err, result) => {
      if (err) {
        // if it's a duplicate
        if (err.code === 'ER_DUP_ENTRY') {
          resolve(err.code);
          return;
        } else {
          // if the error is not from a duplicate
          console.error('Could not insert new cow info: ', err);
          return;
        }
      }
      // if successful, send how many cows were added (always 1)
      resolve(result.affectedRows);
    });
  });
}

var update = function(cowInfo, cowId) {

  return new Promise((resolve, reject) => {

    var sql;

    if (cowInfo.name && cowInfo.description) {
      sql = `UPDATE cows SET name='${cowInfo.name}', description='${cowInfo.description}' WHERE id='${cowId}'`;
    } else if (cowInfo.name) {
      sql = `UPDATE cows SET name='${cowInfo.name}' WHERE id='${cowId}'`;
    } else {
      sql = `UPDATE cows SET description='${cowInfo.description}' WHERE id='${cowId}'`;
    }

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Could not update new cow info: ', err);
        reject(err);
      } else {
        resolve(result.affectedRows);
      }
    });
  });
}

var deleteCow = function(cowId) {
  return new Promise((resolve, reject) => {
    var getCow = `SELECT * FROM cows WHERE id=${cowId}`;
    db.query(getCow, (err1, result1) => {
      if (err1) {
        console.error('Could not get the cow that I wanted to delete');
      }
      var deleteCow = `DELETE FROM cows WHERE id=${cowId}`;
      db.query(deleteCow, (err2, result2) => {
        if (err2) {
          console.error('Could not delete cow: ', err2);
        } else {
          resolve(result1);
        }
      });
    })

  });
}

module.exports = {
  save: save,
  update: update,
  deleteCow: deleteCow
}