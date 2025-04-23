import { SQLDatabase } from "encore.dev/storage/sqldb";

// Create database instance
export const db = new SQLDatabase("mission-brief", {
    migrations: "./migrations",
});
