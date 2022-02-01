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
        short_desc
        long_desc
        age_group
        date
        time
        location
        players {
            _id
        }
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
          sessions {
            _id
          }
          stats {
            preffered_position
            preffered_foot
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

export const QUERY_SESSION = gql`
    query getSession($id: ID) {
        session(_id: $id) {
            title
            short_desc
            long_desc
            age_group
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
      stats {
        preffered_position
        preffered_foot
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
    }
  }
`;
