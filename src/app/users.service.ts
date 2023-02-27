import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable, throwError} from "rxjs";
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'http://localhost:8080/api'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  getUsers(){
    return this.http.get<User[]>(this.baseUrl + "/getUsers");
  }
  getRandomUser() {
    return this.http.get<User>(this.baseUrl+"/randUser");
  }
  setLike(id1: string, id2:string){
    console.log(this.baseUrl+"/like?id="+id1+"&like="+id2);
    this.http.post(this.baseUrl+"/like?id="+id1+"&like="+id2,null).subscribe();
  }

  addUser(user: User){
    console.log(user)
    this.http.post(this.baseUrl+"/addUser?username="+user.username+"&photo="+user.photo+"&location="+user.location+"&birthday="+user.birthday.toISOString().substring(0,10)+"&description="+user.description+"&gender="+user.gender+"&password="+user.password,null).subscribe();
  }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


}
