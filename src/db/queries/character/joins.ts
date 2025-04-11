import { eq } from "drizzle-orm"
import db from "../../client"
import { characterTable } from "../../schema"
import { dragonTable } from "../../schema/dragon"


export default async function characterDragonJoin() {
    const result = await db.select().from(characterTable).innerJoin(dragonTable, eq(characterTable.dragon, dragonTable.id))
    return result
}