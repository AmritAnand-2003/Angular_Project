import { NgModule } from "@angular/core";
import { MyComponentsModule } from "./my-components.module";
import { RouterModule, Routes } from "@angular/router";
import { FormBuilderComponent } from "./form-builder/form-builder.component";
import { FormCreatorComponent } from "./form-creator/form-creator.component";
import { TableBuildComponent } from "./table-build/table-build.component";

const routes: Routes = [
    { path: 'builder', component:  FormBuilderComponent},
    { path: 'creator', component:  FormCreatorComponent},
    { path: 'TableBuilder', component: TableBuildComponent},
  ];
  
  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
  })
  export class NodesRoutingModule {
  }