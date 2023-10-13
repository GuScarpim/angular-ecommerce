import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'

@Component({
  selector: 'form-login',
  template: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Insira o seu email',
        type: 'text',
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Senha',
        placeholder: '******',
        type: 'password',
      },
    },
  ];

  onSubmit() {
    // Lógica para manipular os dados após o envio do formulário
    console.log(this.model)
  }
}
