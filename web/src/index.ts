import { User } from './models/User';

const user = new User({ name: 'NewRecord', age: 50 });

user.set({ name: 'newName', age: 25 });
user.save();
