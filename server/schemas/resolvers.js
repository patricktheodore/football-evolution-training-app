const { User, Session } = require('../models')
const { AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (parent, args) => {
            return await User.findById(args);   
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        sessions: async () => {
            return await Session.find();
        },
        session: async (parent, args) => {
            return await Session.findById(args)
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        login: async (parent, {email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPassword = await user.isCorrectPassword(password)

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect credentials!');
            }

            const token = signToken(user);

            return { token, user };
        },
        addSession: async (parent, args) => {
            const session = await Session.create(args);
            return session
        },
        saveStats: async (parents, args, context) => {
            console.log(context.user);
            console.log(args);
            //if context.user.is_coach === true, update a specific users stats with the
            // provided object. else return authenticationError

                const stats = await User.findOneAndUpdate(
                    { _id: args._id },
                    { $set: { stats: args.input} },
                    { new: true }
                );
    
                return stats


        }
    }
};

module.exports = resolvers;