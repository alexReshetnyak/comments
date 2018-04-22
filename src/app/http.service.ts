import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class HttpMethods {

  constructor(private http: Http) {
  }

  // In future set types to method properties (url: string),
  // In that way you will know what you have to pass to method as argument
  getInfo(url) {
    return this.http.get(url);
  }


  postInfo(url, name, email, phone) {
    const data = {
      name: name,
      email: email,
      phone: phone
    };

  // create http requests only with error handler
    return this.http.post(url, data)
    // .pipe(
    //   catchError(err => {
    //     console.error(err);
    //     return Observable.from('defaultData');
    //   })
    // )
    ;

    // First: never use russian in the code
    // Second: from Angular 5 you don't need anymore convert json to array or something
    // the same in opposite way
    //  на JSON.stringify(data) возвращает только id:101
  }


}
