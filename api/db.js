import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "salamat&029",
  database: "blog",
  connectTimeout: 10000,
  insecureAuth: true,
});
