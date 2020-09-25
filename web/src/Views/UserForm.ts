import { User, UserProps } from '../Models/User'
import { View } from '../Views/View'

export class UserForm extends View<User, UserProps> {

  // return an object, we don't know what the keys are going to be 
  // but they are going to be strings. The value for everything inside that 
  // object will be a function that takes no args and returns nothing
  eventsMap(): { [key: string]: () => void} {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
    }
  }

  onSaveClick = (): void {
    this.model.save()
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input')
    if(input) {
      const name = input.value
      this.model.set({ name })
    }
    
  }




  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `
  }

  

}