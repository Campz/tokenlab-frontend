import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const createUser = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apolo: Apollo) {}

  createUser(name: string, email: string, password: string) {
    return this.apolo.mutate({
      mutation: createUser,
      variables: {
        name,
        email,
        password,
      },
    });
  }
}
