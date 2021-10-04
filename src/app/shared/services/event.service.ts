import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const getEvents = gql`
  query getEvents {
    events {
      id
      description
      start_date
      end_date
    }
  }
`;

const createEvent = gql`
  mutation createEvent(
    $description: String!
    $start_date: String!
    $end_date: String!
  ) {
    createEvent(
      description: $description
      start_date: $start_date
      end_date: $end_date
    ) {
      id
      description
      start_date
      end_date
    }
  }
`;

const updateEvent = gql`
  mutation updateEvent(
    $id: String!
    $description: String!
    $start_date: String!
    $end_date: String!
  ) {
    updateEvent(
      id: $id
      description: $description
      start_date: $start_date
      end_date: $end_date
    ) {
      description
      start_date
      end_date
    }
  }
`;

const deleteEvent = gql`
  mutation deleteEvent($id: String!) {
    deleteEvent(id: $id)
  }
`;

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private apollo: Apollo) {}

  get() {
    return this.apollo.watchQuery<any>({
      query: getEvents,
    });
  }

  create(description: string, start_date: string, end_date: string) {
    return this.apollo.mutate<any>({
      mutation: createEvent,
      variables: {
        description,
        start_date,
        end_date,
      },
    });
  }

  update(
    id: string,
    description: string,
    start_date: string,
    end_date: string
  ) {
    return this.apollo.mutate<any>({
      mutation: updateEvent,
      variables: {
        id,
        description,
        start_date,
        end_date,
      },
    });
  }

  delete(id: string) {
    return this.apollo.mutate<any>({
      mutation: deleteEvent,
      variables: {
        id,
      },
    });
  }
}
