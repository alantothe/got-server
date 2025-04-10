import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { kingdomTable } from "./kingdom";
export const houseTable = pgTable("houses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  house: varchar({ length: 225 }).notNull().unique(),
  kingdom: integer().notNull().references(() => kingdomTable.id)
});