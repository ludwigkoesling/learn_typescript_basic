import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Model } from './Model';

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

  // adding methods to customize the user
  // static buildLocalUser(attr: UserProps): User {
  //   return new User(
  //     new Attributes<UserProps>(attr),
  //     new Eventing(),
  //     new LocalSync<UserProps>(rootUrl)
  //   );
  // }
}
