import {Component, OnInit} from '@angular/core';
import {HttpMethods} from '../http.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  url = 'https://jsonplaceholder.typicode.com/posts';

  name = '';
  email = '';
  phone: number = null;

  isSent = false;

  onSubmit() {

    console.log(this.form);

    this.methods.postInfo(this.url, this.name, this.email, this.phone).subscribe(
      (res) => {
        this.email = '';
        this.name = '';
        this.phone = null;

        this.isSent = true;
      }
    );
  }

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
