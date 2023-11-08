import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log(user);
});

user.fetch();

user.set({ id: 1, name: 'ludwich', age: 20 });

user.save();
