import {Component ,Input} from '@angular/core';
import { User } from '../models/user.model';

@Component({
    selector:'user-list',
    templateUrl:'/app/userList.component.html'
})
export class UserListComponent{
  name = 'Jin';
  @Input() userList: User[];
}