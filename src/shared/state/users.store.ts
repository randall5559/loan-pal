import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from '../interfaces/user.interface'

export interface UsersState extends EntityState<User> {}

@StoreConfig({
  name: 'users'
})
export class UsersStore extends EntityStore<UsersState> {

  constructor() {
    super();
  }

}

export const usersStore = new UsersStore();
