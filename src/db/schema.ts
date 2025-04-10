import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const characterTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({length: 255}).notNull(),
  house: varchar({length: 255}).notNull().references(() => houseTable.id)

});

export const houseTable = pgTable("houses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  house: varchar({ length: 225 }).notNull(), 
  kingdom: varchar({length: 255}).notNull()

})


export const kingdomTable = pgTable("kingdom", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
});