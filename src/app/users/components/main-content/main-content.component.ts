import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserApiService} from "../../services/user-api.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  users: Array<User> = [];
  constructor(private userService: UserApiService) { }
  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((data: any) => {
        this.users = data['results'];
        console.log(this.users);
      })
  }
}
