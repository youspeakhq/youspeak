import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a User database table with a "username", "email",
"profilePicture" and "spkBalance" field.
=========================================================================*/
const schema = a.schema({
  User: a
    .model({
      username: a.string().required(),
      email: a.email().required(),
      profilePicture: a.string(),
      spkBalance: a.integer().default(0),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.owner()]),
  
  Lesson: a
    .model({
      title: a.string().required(),
      description: a.string(),
      difficulty: a.string(),
      language: a.string().required(),
      content: a.json(),
      userId: a.id(),
    })
    .authorization((allow) => [allow.authenticated().to(['read']), allow.owner()]),
  
  Score: a
    .model({
      userId: a.id().required(),
      lessonId: a.id().required(),
      score: a.integer().required(),
      completedAt: a.datetime(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: users } = await client.models.User.list()

// return <ul>{users.map(user => <li key={user.id}>{user.username}</li>)}</ul>

