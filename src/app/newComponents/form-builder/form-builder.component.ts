import { Component } from '@angular/core';
import { MaterialUIModule } from '../../material-ui/material-ui.module';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent {
  // email = new FormControl('', [Validators.required, Validators.email]);
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  // hideRequiredControl = new FormControl(false);
  // floatLabelControl = new FormControl('auto' as FloatLabelType);
  // options = this._formBuilder.group({
  //   hideRequired: this.hideRequiredControl,
  //   floatLabel: this.floatLabelControl,
  // });

  // constructor(private _formBuilder: FormBuilder) {}

  // getFloatLabelValue(): FloatLabelType {
  //   return this.floatLabelControl.value || 'auto';
  // }
  // required = false;

  loginForm= new FormGroup({
    user: new FormControl(''),
    name: new FormControl('')
  })
  loginUser(){
    console.warn(this.loginForm.value);
  }

}
