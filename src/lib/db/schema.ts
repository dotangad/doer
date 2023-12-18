import { pgTable, serial, date, varchar } from "drizzle-orm/pg-core";
import db from ".";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 200 }),
  email: varchar("email", { length: 200 }),
  createdat: date("createdat"),
});
export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type
