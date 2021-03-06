import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
    {
        users {
            _id
            first_name
            last_name
            email
            date_of_birth
            created_at
            is_coach
            sessions {
                _id
            }
        }
    }
`;

export const QUERY_ALL_SESSIONS = gql`
{
    sessions {
        _id
        title
        type
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

export const QUERY_USER = gql`
    query getUser($id: ID) {
        user(_id: $id) {
          _id
          first_name
          last_name
          date_of_birth
          is_coach
          email
          password
          created_at
          preffered_foot
          preffered_position
          sessions {
            _id
          }
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
          feedback {
            body
            coach
            sessionDate
            session
            feedbackDate
          }
        }
      }
`;

export const QUERY_SESSION = gql`
    query getSession($id: ID) {
        session(_id: $id) {
            title
            type
            short_desc
            long_desc
            min_age
            max_age
            date
            time
            location
            players {
            _id
            }
        }
    }
`;

export const GET_ME = gql`
query Me {
    me {
      _id
      first_name
      last_name
      date_of_birth
      is_coach
      email
      password
      created_at
      preffered_foot
      preffered_position
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
      sessions {
        _id
      }
      feedback {
        body
        coach
        sessionDate
        session
        feedbackDate
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($price: Int!) {
    checkout(price: $price) {
      session
    }
  }
`;

export const QUERY_CAMPS = gql`
    query Camps($type: String) {
        camps(type: $type) {
            title
            type
            short_desc
            long_desc
            min_age
            max_age
            date
            time
            location
            players {
            _id
            }
        }
    }
`;

export const QUERY_TOURNAMENTS = gql`
    query Tournaments($type: String) {
        tournaments(type: $type) {
            title
            type
            short_desc
            long_desc
            min_age
            max_age
            date
            time
            location
            players {
            _id
            }
        }
    }
`;

export const QUERY_ACADEMIES = gql`
    query Academy($type: String) {
        academies(type: $type) {
            title
            type
            short_desc
            long_desc
            min_age
            max_age
            date
            time
            location
            players {
            _id
            }
        }
    }
`;
