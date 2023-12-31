import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Model } from './Model';
import { Collection } from './Collection';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attr: UserProps): User {
    return new User(
      new Attributes<UserProps>(attr),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  // adding methods to customize the user
  // static buildLocalUser(attr: UserProps): User {
  //   return new User(
  //     new Attributes<UserProps>(attr),
  //     new Eventing(),
  //     new LocalSync<UserProps>(rootUrl)
  //   );
  // }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
