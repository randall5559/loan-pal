import { QueryEntity } from '@datorama/akita';
import { UsersStore, UsersState, usersStore } from './users.store';
import * as firebase from 'firebase';

export class UsersQuery extends QueryEntity<UsersState> {

  constructor(protected store: UsersStore) {
    super(store);
  }

  getAllUsers() {
    return firebase.database().ref('/users').once('value');
  }

}

export const usersQuery = new UsersQuery(usersStore);
