import { Component } from '@angular/core';
import { UserList } from "./user-list";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
   userList: UserList[] = [
    {
      name: "David",
      age: 45
    },
    {
      name: "Matías",
      age: 35
    }
  ];
}
