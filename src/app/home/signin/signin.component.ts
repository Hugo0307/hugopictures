import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  /** Método chama o método de autenticação do serviço que se comunica com a api do backend */
  login() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.authenticate(userName, password)
      .subscribe(
        () => {
          alert('Welcome!'),
          this.router.navigate(['/user/', `${userName}`])
        },
        err => {
          alert('User name or password is invalid!'),
          this.loginForm.reset();
        }
      );
  }
}
