import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopyComponent } from './copy/copy.component';
import { GetComponent } from './get/get.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: 'copy',component:CopyComponent},
  {path: 'test',component:TestComponent},
  {path: 'table',component:TableComponent},
  {path: 'get',component:GetComponent},
  {path: 'update/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
