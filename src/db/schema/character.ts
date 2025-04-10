import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { houseTable } from "./house";
export const characterTable = pgTable("characters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 255 }).notNull(),
  house: integer().notNull().references(() => houseTable.id),
  dragon: varchar({length:255})
});
