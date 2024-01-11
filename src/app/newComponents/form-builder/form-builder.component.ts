import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MaterialUIModule } from '../../material-ui/material-ui.module';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FloatLabelType } from '@angular/material/form-field';
import { ApprovalService } from '../../approval.service';

interface Labels{
  labelName: string;
  labelType: string;
  isRequired: boolean;
  options: string;
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent implements OnInit {

  // @Output() addFieldData = new EventEmitter<Labels[]>();
  // @Output() renderFormEvent = new EventEmitter<void>();
  
  required = false;

  loginForm= new FormGroup({
    labelType: new FormControl(''),
    labelName: new FormControl(''),
    isRequired: new FormControl(''),
    options: new FormControl('')
  })
  loginUser(){
    console.warn(this.loginForm.value);
  }


  // labelName: string = "";
  // labelType: string = "";
  // isRequired: boolean = false;
  // options: string = "";

  values: Labels[] = [];
  constructor(private shared : ApprovalService){}
  addField(){
    console.log("Got Clicked");
    console.log(this.loginForm.value);
    const isRequiredValue = this.loginForm.value.isRequired;
    const isRequired = typeof isRequiredValue === 'boolean'? isRequiredValue: isRequiredValue === 'false';
    const data = {
      labelName: this.loginForm.value.labelName || "",
      labelType: this.loginForm.value.labelType || "",
      isRequired,
      options: this.loginForm.value.options || ""
    };
    // console.log("hi");
    // console.log(data);
    this.values.push(data);
    // this.addFieldData.emit(this.value);
    // console.log(this.values);
  }

  ngOnInit(): void{
    console.log("Inserted from form builder")
    this.shared.setForm(this.values);
  }
  // showForm(){
  //   this.renderFormEvent.emit();
  // }

}
