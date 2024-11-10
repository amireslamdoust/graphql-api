import { User } from "../models/User";
import { Resolvers } from "./types"; // Imported from generated types

export const resolvers: Resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    // createUser: async (_, { name, email }) => {
    //   const user = new User({ name, email });
    //   return await user.save();
    // },
  },
};
