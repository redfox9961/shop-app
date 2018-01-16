import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {ProductDataService} from './product-data.service';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import { ManagementPageComponent } from './management-page/management-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import {ConstantHelperService} from './constant-helper.service';
import {ProductService} from './product.service';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [{
  path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: MainPageComponent},
  {path: 'admin', component: MainPageComponent},
  {path: 'add-product', component: EditComponent},
  {path: 'edit-product/:id', component: EditComponent},
  {path: 'product/:id', component: DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ManagementPageComponent,
    MainPageComponent,
    EditComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ProductDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
    ConstantHelperService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
