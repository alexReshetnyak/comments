import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

// separate import files (your files and framework, installed modules files)
import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
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
