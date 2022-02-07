const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        first_name: String
        last_name: String
        date_of_birth: String
        is_coach: Boolean
        email: String
        password: String
        created_at: String
        preffered_position: String
        preffered_foot: String
        sessions: [Session]
        stats: [Stats]
    }

    type Session {
        _id: ID
        title: String
        short_desc: String
        long_desc: String
        min_age: Int
        max_age: Int
        date: String
        time: String
        location: String
        players: [User]
    }
    
    type Stats {
        pace: Int
        shooting: Int
        passing: Int
        dribbling: Int
        defending: Int
        physicality: Int
        skills: Int
        weak_foot_ability: Int
        tactical: Int
        psychological: Int
    }

    input SessionInput {
        title: String
        short_desc: String
        long_desc: String
        min_age: Int
        max_age: Int
        date: String
        time: String
        location: String
    }

    input StatsInput {
        pace: Int
        shooting: Int
        passing: Int
        dribbling: Int
        defending: Int
        physicality: Int
        skills: Int
        weak_foot_ability: Int
        tactical: Int
        psychological: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]
        sessions: [Session]
        session(_id: ID): Session
        user(_id: ID): User
        me: User
    }

    type Mutation {
        addUser (first_name: String!, last_name: String!, email:String!, password:String!, date_of_birth: String!, preffered_position: String!, preffered_foot: String!): Auth
        login (email: String!, password: String!): Auth
        updateUser (first_name: String, last_name: String, preffered_position: String, preffered_foot: String): Auth
        addCoach (first_name: String!, last_name: String!, email:String!, password:String!, is_coach:Boolean=false): User!
        addSession (input: SessionInput) : Session!
        saveStats(_id: ID!, pace: String, shooting: String, passing: String, dribbling: String, defending: String, physicality: String, skills: String, weak_foot_ability: String, tactical: String, psychological: String): User
        addUserToSession (sessionId: ID): User!
        removeUserFromSession (sessionId: ID): User!
        updateSession (sessionId: ID, input: SessionInput): Session!
    }
`;

module.exports = typeDefs;