import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                first_name
                last_name
                email
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($first_name: String!, $last_name: String!, $email: String!, $password: String!, $date_of_birth: String!, $preffered_foot: String!, $preffered_position: String!) {
        addUser(first_name: $first_name, last_name: $last_name, email: $email, password: $password, date_of_birth: $date_of_birth, preffered_foot: $preffered_foot, preffered_position: $preffered_position) {
            token
            user {
              _id
              first_name,
              last_name,
              date_of_birth,
              is_coach,
              email,
              password,
              created_at,
              preffered_foot
              preffered_position
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation UpdateUser($firstName: String, $lastName: String, $dateOfBirth: String, $isCoach: Boolean, $preffered_position: String!) {
        updateUser(first_name: $firstName, last_name: $lastName, date_of_birth: $dateOfBirth, is_coach: $isCoach, preffered_position: $preffered_position) {
          _id
          first_name
          last_name
          date_of_birth
          is_coach
          preffered_foot
          preffered_position
        }
      }
`;

export const ADD_SESSION = gql`
    mutation addSession($input: SessionInput) {
        addSession(input: $input) {
          _id
          title
          short_desc
          long_desc
          min_age
          max_age
          date
          time
          location
        }
      }
`;

export const SAVE_STATS = gql`
    mutation saveStats($id: ID!, $input: StatsInput) {
        saveStats(_id: $id, input: $input) {
          first_name
          stats {
            preffered_position
          }
        }
      }
`;

export const ADD_USER_TO_SESSION = gql`
    mutation AddUserToSession($sessionId: ID) {
        addUserToSession(sessionId: $sessionId) {
          _id
          sessions {
            _id
          }
        }
      }
`;

export const ADD_SESSION_TO_USER = gql`
    mutation AddSessionToUser($sessionId: ID) {
        addSessionToUser(sessionId: $sessionId) {
          _id
          sessions {
            _id
          }
        }
      }
`;

export const REMOVE_USER_FROM_SESSION = gql`
    mutation RemoveUserFromSession($sessionId: ID) {
        removeUserFromSession(sessionId: $sessionId) {
          _id
          sessions {
            _id
          }
        }
      }
`;

export const UPDATE_SESSION = gql`
    mutation UpdateSession($sessionId: ID, $input: SessionInput) {
        removeUserFromSession(sessionId: $sessionId, input: $input) {
          title
          short_desc
          long_desc
          min_age
          max_age
          date
          time
          location
        }
      }
`;