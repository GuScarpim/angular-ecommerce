import * as yup from 'yup'

import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { YupValidationService } from '../../../../shared/services/yup.service'

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  form!: FormGroup

  constructor(private fb: FormBuilder, private yupValidationService: YupValidationService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })

    const emailControl = this.form.get('email')
    if (emailControl) {
      this.yupValidationService.addYupValidation(emailControl, yup.string().required('Email é obrigatório').email('Email inválido'))
    }

    const passwordControl = this.form.get('password')
    if (passwordControl) {
      this.yupValidationService.addYupValidation(passwordControl, yup.string().required('Senha é obrigatória'))
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
  }
}
