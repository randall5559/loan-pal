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

  /**
   * Update a selected user information
   *
   * @param {User} user
   * @memberof UsersService
   */
  updateUserInfo(user: User) {
    this.usersStore.update(user.id, user);
    firebase.database().ref('users/' + user.id).set(user);
  }

  /**
   * Remove a user from the database
   *
   * @param {string} id
   * @memberof UsersService
   */
  removeUser(id: string) {
    this.usersStore.remove(id);
    firebase.database().ref('users/' + id).remove();
  }

}

export const usersService = new UsersService(usersStore);
