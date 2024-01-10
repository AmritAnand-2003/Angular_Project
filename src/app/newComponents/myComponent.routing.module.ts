import { NgModule } from "@angular/core";
import { MyComponentsModule } from "./my-components.module";
import { RouterModule, Routes } from "@angular/router";
import { FormBuilderComponent } from "./form-builder/form-builder.component";
import { FormCreatorComponent } from "./form-creator/form-creator.component";

const routes: Routes = [
    { path: 'builder', component:  FormBuilderComponent},
    { path: 'creator', component:  FormCreatorComponent},
  ];
  
  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
  })
  export class NodesRoutingModule {
  }