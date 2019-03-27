import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserModel } from '../User.Model';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';  

@Injectable()
export class UserService {
    public myAppUrl: string = "";  
    public token: string = "";
    public data: any;

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getAllUsers() {
        return this._http.get(this.myAppUrl + 'api/User/GetUser')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }  

    addUser(user: UserModel) {
        return this._http.post(this.myAppUrl + 'api/User/AddUser', user)
            //.map((response: Response) => response.json())
            //.catch(this.errorHandler)
            .map((res: Response) => res.json())
            .catch(response => {
                if (response.status === 401) {
                    
                }
                return response;
            });
    }  

    delUser(username: string) {
        return this._http.delete(this.myAppUrl + 'api/User/DelUser/' + username)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);  
    }  



    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  

}