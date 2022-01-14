import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyComponent } from './copy/copy.component';
import { GetComponent } from './get/get.component';
import { MenuComponent } from './menu/menu.component';
import { ServiceService } from './service/service.services';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MenuComponent,
    CopyComponent,
    TableComponent,
    GetComponent,
    UpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        FormsModule,
        HttpClientModule
        
      
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
