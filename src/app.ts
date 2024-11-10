import express from "express";
import { graphqlHTTP } from "express-graphql";
import { connectDB } from "./config/db";
import { resolvers } from "./graphql/resolvers";
import { buildSchema } from "graphql";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

const app = express();

// Build GraphQL schema from the schema file
const schema = buildSchema(
  fs.readFileSync("./src/graphql/schema.graphql", "utf-8"),
);

// Connect to MongoDB
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

export default app;
