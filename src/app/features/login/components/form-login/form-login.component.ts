import * as yup from 'yup';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YupValidationService } from '../../../../shared/services/yup.service';
import { fakeLogin } from '../../../../shared/services/fakeLogin.service';
import { AuthService } from '../../../../shared/services/authService.service';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';

interface IValues {
  email: string;
  password: string;
}

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  form!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private yupValidationService: YupValidationService,
    private _toastService: ToastService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    const emailControl = this.form.get('email');
    if (emailControl) {
      this.yupValidationService.addYupValidation(emailControl, yup.string().required('Email é obrigatório').email('Email inválido'));
    }

    const passwordControl = this.form.get('password');
    if (passwordControl) {
      this.yupValidationService.addYupValidation(passwordControl, yup.string().required('Senha é obrigatória'));
    }
  }

  setUserDetails(token: string, name: string) {
    this.authService.setToken(token);
    this.authService.setName(name);
  }

  onSubmit = async (values: IValues) => {
    try {
      this.isLoading = true;

      const { token, name } = await fakeLogin(values.email, values.password);

      this.setUserDetails(token, name);
      this.router.navigate(['/']);

    } catch (error: any) {
      const errorString = `Erro ao fazer login: ${error.message}`;
      this._toastService.error(error.message);
    } finally {
      this.isLoading = false;
    }
  };
}
