var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.connection = mysql.createConnection({ 
  user: "root",
  password: "", 
  database: "chat"
});

//tells us if we have successfully connected with the database
connection.connect(function(err){
  if(err) {
    console.log("error connecting: " + err.stack); 
  } else {
    console.log("connected as id: " + connection.threadId);
  }
});


/* command / inner join in mysql: 
select u.name, m.message from messages m inner join users u on (m.user_id = u.id) where u.id = 1;
+------+------------------------------+
| name | message                      |
+------+------------------------------+
| fred | always sanitize your tables! |
+------+------------------------------+
1 row in set (0.00 sec)

*/