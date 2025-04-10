// import 'dotenv/config';
// import { eq } from 'drizzle-orm';
// import { drizzle } from 'drizzle-orm/node-postgres';
// import { characterTable } from './db/schema';
  
// const db = drizzle({ 
//   connection: { 
//     connectionString: process.env.DATABASE_URL!,
//   }
// });

async function main() {
  // const newCharacter: typeof characterTable.$inferInsert = {
  //   firstName: 'Jon',
  //   lastName: 'Snow',
  //   house: 'Stark'
  // };

//   await db.insert(characterTable).values(newCharacter);
//   console.log('New user created!')

//   const character = await db.select().from(characterTable);
//   console.log('Getting all users from the database: ', character)


//   await db
//     .update(characterTable)
//     .set({
//       house: 'Targaryen',
//     })
//     .where(eq(characterTable.house, newCharacter.house));
//   console.log('Character info updated!')

//   // await db.delete(usersTable).where(eq(usersTable.email, user.email));
//   // console.log('User deleted!')
}

main();
