import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const root = document.getElementById('root');
const user = User.buildUser({ name: 'Lude', age: 32 });

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error('No html rendered');
}
