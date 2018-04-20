import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormComponent} from './form/form.component';
import {HttpModule} from '@angular/http';
import {HttpMethods} from './http.service';
import {UsersComponent} from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [HttpMethods],
  bootstrap: [AppComponent]
})
export class AppModule {
}
