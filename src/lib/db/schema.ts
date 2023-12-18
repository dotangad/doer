import { sql } from "drizzle-orm";
import { pgTable, serial, date, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 200 }),
  email: varchar("email", { length: 200 }),
  createdat: date("createdat").default(sql`current_timestamp`),
});
export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type
