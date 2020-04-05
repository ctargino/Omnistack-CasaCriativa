const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./LaunchOministack.db')

db.serialize(function () {
  //criar a tabela, crase `` para nao perder a string
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      link TEXT
    );
  `)

   //deletar dado na tabela
  // db.run(`DELETE FROM ideas WHERE id = ?`, [5], function(err) {
  //   if (err) return console.log(err)
  
  //   console.log("DELETEI", this)
  // })
  
  
  // //consultar dados na tabela
  // db.all(`SELECT * FROM ideas`, function(err, rows) {
  //   if (err) return console.log(err)
  
  //   console.log(rows)
  // })
})

module.exports = db
