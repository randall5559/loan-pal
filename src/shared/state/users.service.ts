import { ID } from '@datorama/akita';
import * as firebase from 'firebase';
import { UsersStore, usersStore } from './users.store';
import { User } from '../interfaces/user.interface';

export class UsersService {

  constructor(private usersStore: UsersStore) {
  }

  /**
   * Add a user to the local and real db
   *
   * @param {User} user
   * @memberof UsersService
   */
  addNewUser(user: User) {
    this.usersStore.add(user);
    firebase.database().ref('users/' + user.id).set(user);
  }

}

export const usersService = new UsersService(usersStore);
