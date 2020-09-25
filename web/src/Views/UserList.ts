import { CollectionView } from './CollectionView'
import { User, UserProps } from '../Models/User'
import { UserShow } from './UserShow'

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    console.log(itemParent)
    new UserShow(itemParent, model).render();
  }
}