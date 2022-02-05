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
    mutation UpdateUser($first_name: String, $last_name: String, $preffered_position: String, $preffered_foot: String) {
        updateUser(first_name: $first_name, last_name: $last_name, preffered_position: $preffered_position, preffered_foot: $preffered_foot) {
          token
          user {
            _id
          first_name
          last_name
          date_of_birth
          is_coach
          preffered_foot
          preffered_position
          }
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
    mutation saveStats($id: ID!, $pace: String, $shooting: String, $passing: String, $dribbling: String, $defending: String, $physicality: String, $skills: String, $weak_foot_ability: String, $tactical: String, $psychological: String) {
        saveStats(_id: $id, pace: $pace, shooting: $shooting, passing: $passing, dribbling: $dribbling, defending: $defending, physicality: $physicality, skills: $skills, weak_foot_ability: $weak_foot_ability, tactical: $tactical, psychological: $psychological) {
          first_name
          stats {
            pace
            shooting
            passing
            dribbling
            defending
            physicality
            skills
            weak_foot_ability
            tactical
            psychological
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