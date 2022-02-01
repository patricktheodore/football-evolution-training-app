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
        sessions: [Session]
        stats: [Stats]
    }

    type Session {
        _id: ID
        title: String
        short_desc: String
        long_desc: String
        age_group: String
        date: String
        time: String
        location: String
        players: [User]
    }
    
    type Stats {
        preffered_position: String
        preffered_foot: String
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
        age_group: String
        date: String
        time: String
        location: String
    }

    input StatsInput {
        preffered_position: String
        preffered_foot: String
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
        addUser (first_name: String!, last_name: String!, email:String!, password:String!): User!
        login (email: String!, password: String!): Auth
        updateUser (first_name: String, last_name: String, date_of_birth:String, is_coach:Boolean): User!
        addCoach (first_name: String!, last_name: String!, email:String!, password:String!, is_coach:Boolean=false): User!
        addSession (input: SessionInput) : Session!
        saveStats (_id: ID!, input: StatsInput) : User!
        addUserToSession (sessionId: ID): User!
        removeUserFromSession (sessionId: ID): User!
    }
`;

module.exports = typeDefs;