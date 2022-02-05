const { User, Session } = require('../models')
const { AuthenticationError } = require('apollo-server-express');
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
            return await Session.findById(args._id)
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            const token = signToken(user)

            return { token, user };
        },
        login: async (parent, { email, password }) => {
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
            console.log(args);
            const session = await Session.create(args.input);
            return session
        },
        saveStats: async (parents, args, context) => {
            console.log(context.user);
            console.log(args);

            const stats = await User.findOneAndUpdate(
                { _id: args._id },
                { $set: { stats: args } },
                { new: true }
            );
            return stats;
        },
        addUserToSession: async (parent, args, context) => {
            if (context.user) {

                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { sessions: args.sessionId } },
                    { new: true }
                );

                const session = await Session.findByIdAndUpdate(
                    { _id: args.sessionId },
                    { $addToSet: { players: context.user._id } }
                );

                return user;

            } else {
                throw new AuthenticationError('You must be logged in to do this!');
            }
        },
        removeUserFromSession: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { sessions: args.sessionId } },
                    { new: true }
                );

                const session = await Session.findByIdAndUpdate(
                    { _id: args.sessionId },
                    { $pull: { players: context.user._id } },
                );

                return user;

            } else {
                throw new AuthenticationError('You must be logged in to do this!')
            }
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                console.log(args);
                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $set: args },
                    { new: true }, 
                );

                const token = signToken(user)

                return { token, user };
            } else {
                throw new AuthenticationError('You must be logged in to do this!')
            }
        },
        updateSession: async (parent, args, context) => {
            const session = await Session.findByIdAndUpdate(
                { _id: args.sessionId },
                { $set: args.input },
                { new: true },
            );

            return session;
        }
    }
};

module.exports = resolvers;