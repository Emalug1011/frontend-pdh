import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { ServicesService } from '../../../../service/services.service'
@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  login: FormGroup;
  errorLogin: boolean = false;
  message: Object = {};
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ServicesService
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.login = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  signin(event: Event) {
    event.preventDefault();
    if (this.login.valid) {
      this.service.signIn(this.login.value).subscribe(res => {
        let response: any = res;
        let message = response.message;/* present into toast */
        let user = {
          access_token: response.result.access_token,
          token_type: response.result.token_type
        }
        sessionStorage.setItem("validate", JSON.stringify(user));
        this.router.navigate(['dashboard'])
      }, err => {
        let error = err.error;
        this.message = { error: `Usuario o contraseña invalido.` }
      })
    } else {
      this.errorLogin = true;
      this.message = { error: "* Debe de ingresar usuario y contraseña" };
    }
  }

  ngOnInit() { }

}
