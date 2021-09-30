import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const login = gql`
  mutation login($email: String!, $password: String!) {
    createSession(email: $email, password: $password) {
      token
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apolo: Apollo) {}

  createSession(email: string, password: string) {
    return this.apolo.mutate({
      mutation: login,
      variables: {
        email,
        password,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createSession: {
          __typename: 'Session',
          token: String,
        },
      },
    });
  }
}
