import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {LoginCredential} from "../models/loginCredential";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData!: FormGroup;
  user: LoginCredential = new LoginCredential();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.createForm()
  }

  createForm() {
    this.formData = this.formBuilder.nonNullable.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }

  onLogin(): void {
    const credentials = {
      username: this.formData?.value.username,
      password: this.formData?.value.password,
    }
    this.authenticationService.login(credentials)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/products');
        },
        error: () => {
          alert(`Invalid username or password!`);
        }
      });
    // alert(`Username: ${this.user.username}, Password: ${this.user.password}`);
  }
}
