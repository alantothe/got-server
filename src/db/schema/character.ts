import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { dragonTable } from "./dragon";
import { houseTable } from "./house";

export const characterTable = pgTable("characters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstname: varchar({ length: 255 }).notNull(),
  lastname: varchar({ length: 255 }).notNull(),
  house: integer()
    .notNull()
    .references(() => houseTable.id),
  dragon: integer().references(() => dragonTable.id),
});
