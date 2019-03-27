import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'alluser',
    templateUrl: './alluser.component.html'
})
export class AllUserComponent {

    public users: User[] = [];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/User/GetUser').subscribe(result => {
            this.users = result.json() as User[];
        }, error => console.error(error));
    }
}

interface User {
    Name: string;
    Email: number;
    Password: number;

}