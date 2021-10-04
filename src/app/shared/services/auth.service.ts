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
  constructor(private apollo: Apollo) {}

  createSession(email: string, password: string) {
    return this.apollo.mutate<any>({
      mutation: login,
      variables: {
        email,
        password,
      },
    });
  }

  logout() {
    localStorage.removeItem('JWT');
  }
}
