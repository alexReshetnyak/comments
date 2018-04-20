import {Component, OnInit} from '@angular/core';
import {HttpMethods} from '../http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = {};

  isDownloaded = false;
  errorOnLoad = false;

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private methods: HttpMethods) {
  }

  ngOnInit() {
  }

  getUsers() {
    this.methods.getInfo(this.url).subscribe((res) => {
        this.users = res.json();
        this.isDownloaded = true;

      },
      (err) => {
        console.log(err);
        this.errorOnLoad = true;
        this.isDownloaded = true;
      });

  }

}
