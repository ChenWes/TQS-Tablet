import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

//api url address
let baseHost = 'http://localhost:3000';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    // console.log('Hello AuthServiceProvider Provider');
  }

  postDataToApi_withOutToken(apiUrl: string, postData) {
    return new Promise((resolve, reject) => {
      let header = new Headers({
        'Content-Type': 'application/json'
      });
      let options = new RequestOptions({ headers: header });

      this.http.post(baseHost + apiUrl, JSON.stringify(postData), options).subscribe(res => {
        console.log(`auth-service provider call api status is ${res.status}`);
        resolve(res.json());
      }, (err) => {
        console.log(`err:auth-service provider call api status is ${err}`);
        reject(err);
      });
    });
  }

  putDataToApi(apiUrl: string, token: string, putData) {
    return new Promise((resolve, reject) => {
      let header = new Headers({
        'Content-Type': 'application/json',
        'authorization': token
      });
      let options = new RequestOptions({ headers: header });

      this.http.put(baseHost + apiUrl, JSON.stringify(putData), options).subscribe(res => {
        console.log(`auth-service provider call api status is ${res.status}`);
        resolve(res.json());
      }, (err) => {
        console.log(`err:auth-service provider call api status is ${err}`);
        reject(err);
      });
    });
  }

  getDataToApi(apiUrl: string, token: string) {
    return new Promise((resolve, reject) => {
      let header = new Headers({
        'Content-Type': 'application/json',
        'authorization': token
      });
      let options = new RequestOptions({ headers: header });

      this.http.get(baseHost + apiUrl, options).subscribe(res => {
        console.log(`auth-service provider call api status is ${res.status}`);
        resolve(res.json());
      }, (err) => {
        console.log(`err:auth-service provider call api status is ${err}`);
        reject(err);
      });
    });
  }
}
