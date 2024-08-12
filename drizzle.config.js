

  import { defineConfig } from "drizzle-kit"
export default defineConfig({
    schema:"./utils/schema.js",
    dialect: "mysql", // "postgresql" | "mysql"
    //driver: "turso" // optional and used only if `aws-data-api`, `turso`, `d1-http`(WIP) or `expo` are used
    dbCredentials: {
        host: "mysql-19348708-rohitjaiswalofficial-726c.k.aivencloud.com",
        user: "avnadmin",
        database: "defaultdb",
        password: "AVNS_OMyrYaEj-c4rJI9GfB8",
        port: '26684'
    }
})