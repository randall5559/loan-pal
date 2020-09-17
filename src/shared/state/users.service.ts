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
    this.usersStore.updateActive(user);
    const id = this.usersStore.setActive(user.id);
    firebase.database().ref('users/' + user.id).set(user);
    return id;
  }

}

export const usersService = new UsersService(usersStore);
