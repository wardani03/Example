import {Http, Headers} from "@angular/http";
import {AppUser} from "../model/AppUser";
import {Injectable} from "@angular/core";
/**
 * Created by lenovo on 1/2/2017.
 */

@Injectable()
export class RegisterService{
  constructor(private http:Http){}

  sendUser(appUser: AppUser){
    let url = "http://localhost:9000/user/register";
    let header = new Headers({'Content-type': 'application/json'})

    return this.http.post(url, JSON.stringify(appUser), {headers: header})
  }
}
