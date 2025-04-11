import { integer, pgTable, varchar } from "drizzle-orm/pg-core";


export const dragonTable = pgTable("dragons", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
})