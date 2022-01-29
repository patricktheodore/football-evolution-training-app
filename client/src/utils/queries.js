import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        user {
            _id
            first_name
            last_name
            email
            date_of_birth
            created_at
        }
    }
`;
