import {Component, OnInit} from '@angular/core';
import {HttpMethods} from '../http.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // when you declare a property use access modificators (public, private)
  form: FormGroup;

  // save url data source in service, not in your component
  url = 'https://jsonplaceholder.typicode.com/posts';

// no need this properties - name email phone,
// use this.form.value() to get info what needed to sent
  name = '';
  email = '';
  phone: number = null;

  isSent = false;

  onSubmit() {
    // Don't leave active console.log(), always try to commit this method or delete it,
    // also use comment in log method like console.log(users, 'users debug')
    console.log(this.form);

// Better to send info in single variable like userInfo or something same
    this.methods.postInfo(this.url, this.name, this.email, this.phone).subscribe(
      (res) => {
        // use this.form.reset(); instead your code below
        this.email = '';
        this.name = '';
        this.phone = null;

        this.isSent = true;
      }
    );
  }

  // constructor and ngOnInit have to be above the other methods
  constructor(private methods: HttpMethods) {
  }


  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      phone: new FormControl(null, Validators.required)
    });

  }


}
