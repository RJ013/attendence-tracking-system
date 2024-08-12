import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "mysql-19348708-rohitjaiswalofficial-726c.k.aivencloud.com",
  user: "avnadmin",
  database: "defaultdb",
  password: "AVNS_OMyrYaEj-c4rJI9GfB8",
  port: '26684'
});

export const db = drizzle(connection);