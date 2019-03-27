import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { UserModel } from '../user/User.Model';
import { UserService } from './Services/User.Service';
import { Router } from '@angular/router'

@Component({
    selector: 'adduser',
    templateUrl: './adduser.component.html',
    providers: [UserService]
})
export class AddUserComponent {

    public usermodel: UserModel = new UserModel();

    constructor(private _userservice: UserService, private _Route: Router) {
        //this.data = JSON.parse(localStorage.getItem('AdminUser'));
    }

    onSubmit() {

        var formdata = this.usermodel;
        this._userservice.addUser(formdata).subscribe(
            data => {
                if (data == true) {
                    alert("User is added successfully!");
                    //this._Route.navigate(['AllCar']);
                }
                else {
                    alert("Problem while adding user");
                }
            },
            error => {
                if (error) {
                    alert("An Error has occured please try again after some time !");
                }
            });
    }; 

    onDelete(username: string) {
        var ans = confirm("Do you want to delete user with name: " + username);
        if (ans) {
            this._userservice.delUser(username).subscribe(
                data => {
                    if (data == true) {
                        alert("User is deleted successfully!");
                        this._Route.navigate(['/alluser']);  
                    }
                    else {
                        alert("Problem while deleting user");
                    }
                },
                error => {
                    if (error) {
                        alert("An Error has occured please try again after some time !");
                    }
                });
        }  

        
    }; 
    

}
