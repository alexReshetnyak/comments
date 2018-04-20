import {Http} from '@angular/http';
import {Injectable} from '@angular/core';


@Injectable()
export class HttpMethods {

  constructor(private http: Http) {
  }

  getInfo(url) {
    return this.http.get(url);
  }

  postInfo(url, name, email, phone){
    const data = {
      name: name,
      email: email,
      phone: phone
    };

    return this.http.post(url, data);

    //  на JSON.stringify(data) возвращает только id:101
  }


}
