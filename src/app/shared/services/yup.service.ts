
import { Injectable } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import * as yup from 'yup'

@Injectable({
  providedIn: 'root',
})
export class YupValidationService {
  constructor() { }

  addYupValidation(control: AbstractControl, validation: yup.StringSchema<string>): void {
    control.valueChanges.subscribe((value) => {
      try {
        validation.validateSync(value)
        control.setErrors(null)
      } catch (error: any) {
        control.setErrors({ yup: error.message })
      }
    })
  }
}
