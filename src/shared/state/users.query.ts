import { QueryEntity } from '@datorama/akita';
import { UsersStore, UsersState, usersStore } from './users.store';
import * as firebase from 'firebase';

export class UsersQuery extends QueryEntity<UsersState> {

  constructor(protected store: UsersStore) {
    super(store);
  }

}

export const usersQuery = new UsersQuery(usersStore);
