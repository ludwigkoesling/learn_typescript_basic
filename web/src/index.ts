import { User } from './models/User';
import { UserForm } from './views/UserForm';

let root = document.getElementById('root');
if (root) {
  const user = User.buildUser({ name: 'Lude', age: 32 });
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('No html rendered');
}
