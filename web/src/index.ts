import { UserList } from './Views/UserList'
import { Collection } from './Models/Collection'
import { User, UserProps } from './Models/User'

const users = new Collection(
  'http://localhost:3000/users', 
  (json: UserProps) => {
    return User.buildUser(json);
  })

users.on('change', () => {
  const root = document.getElementById('root')
  console.log(root)
  if(root) {
    new UserList(root, users).render()
  }
});

users.fetch(); 



