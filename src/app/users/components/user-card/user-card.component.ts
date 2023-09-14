import {Component, Input} from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() users: Array<User> = [];
}
