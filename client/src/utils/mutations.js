import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                first_name
                last_name
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($first_name: String!, $last_name: String!, $date_of_birth: String!, $email: String!, $password: String!) {
        addUser(first_name: $first_name, last_name: $last_name, date_of_birth: $date_of_birth, email: $email, password: $password) {
            _id
            first_name,
            last_name,
            date_of_birth,
            is_coach,
            email,
            password,
            created_at,
        }
    }
`;