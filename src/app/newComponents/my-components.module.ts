import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    FormBuilderComponent,
    FormCreatorComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialUIModule,
  ],
  exports: [
    FormBuilderComponent,
    FormCreatorComponent
  ]
})
export class MyComponentsModule { }
