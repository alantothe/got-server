import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { characterTable } from "./character";

export const dragonTable = pgTable("dragons", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    rider: integer().notNull().references(() => characterTable.id )

})